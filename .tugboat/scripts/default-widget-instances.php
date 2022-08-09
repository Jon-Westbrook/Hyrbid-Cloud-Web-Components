<?php
declare(strict_types=1);

use Drupal\Core\Entity\EntityInterface;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\widget_instance\WidgetInstanceInterface;
use Drupal\widget_type\WidgetTypeInterface;

function _dwi_calculate_values(array $schema): array {
  $properties = $schema['properties'] ?? [];
  $values = [];
  foreach ($properties as $name => $definition) {
    $value = $definition['default']
      ?? $definition['examples'][0]
      ?? $definition['example']
      ?? NULL;
    if (!is_null($value)) {
      $values[$name] = $value;
    }
  }
  return $values;
}

function _dwi_create_entity(EntityTypeManagerInterface $entity_type_manager, WidgetTypeInterface $widget_type): EntityInterface {
  $schema = $widget_type->getSettingsSchema();
  $display_options = _dwi_calculate_values($schema);
  $storage = $entity_type_manager->getStorage('widget_instance');
  $widget_instance = $storage->create(['display_options' => $display_options]);
  $widget_instance->setWidgetType($widget_type);
  return $widget_instance;
}

function _dwi_create_all_entities(EntityTypeManagerInterface $entity_type_manager): array {
  $storage = $entity_type_manager->getStorage('widget_type');
  $widget_types = $storage->loadMultiple();
  return array_map(
    static fn(WidgetTypeInterface $widget_type) => _dwi_create_entity($entity_type_manager, $widget_type),
    $widget_types
  );
}

function _dwi_main() {
  $entity_type_manager = \Drupal::service('entity_type.manager');
  $all_entities = _dwi_create_all_entities($entity_type_manager);
  array_map(
    static fn(WidgetInstanceInterface $widget_instance) => $widget_instance->save(),
    $all_entities
  );
}

_dwi_main();
