#!/usr/bin/env bash
set -euxo pipefail

cd $TUGBOAT_ROOT
yarn install
${TUGBOAT_ROOT}/scripts/compile-all.sh
WIDGET_REGISTRY_DIR="${DRUPAL_DOCROOT}/sites/default/files/widget-registry"
rm --recursive --force "${WIDGET_REGISTRY_DIR}"
mkdir --parents "${WIDGET_REGISTRY_DIR}/static"

# Find all the folders with the name "public" and copy them to the newly created location.
while IFS= read -r -d $'\0' directory; do
  # From /path/to/src/apps/my-widget/public to ${WIDGET_REGISTRY_DIR}/static/my-widget
  destination=$(echo "${directory}" |sed -e 's:.*/apps/::g' -e 's:/public::g')
  cp --recursive "$directory" "${WIDGET_REGISTRY_DIR}/static/$destination"
done < <(find "${TUGBOAT_ROOT}/src/apps" -maxdepth 2 -mindepth 1 -type d -name public -print0)

WIDGETS_SKIP_COMPRESSION=true \
DEBUG=*,-babel*,-eslint* \
NODE_ENV=production \
PUBLIC_ASSETS_URL="${TUGBOAT_SERVICE_URL}sites/default/files/widget-registry/static" \
js-widgets-webpack-cli \
  --debug \
  --existing-registry="https://hybrid-cloud-widgets-development.s3.us.cloud-object-storage.appdomain.cloud/registry.json" \
  --output-dir="${WIDGET_REGISTRY_DIR}" \
  "${TUGBOAT_ROOT}"

perl -pe "s@https\://hybrid-cloud-widgets[^\.]*\.s3\.[^\.]*\.cloud-object-storage\.appdomain\.cloud@${TUGBOAT_SERVICE_URL}sites/default/files/widget\-registry@g" "${WIDGET_REGISTRY_DIR}/registry.json" > "${WIDGET_REGISTRY_DIR}/corrected-registry.json"

# Set the widget registry to pull from Tugboat.
cd $DRUPAL_COMPOSER_ROOT
vendor/bin/drush --yes entity:delete widget_instance
vendor/bin/drush --yes entity:delete widget_type
vendor/bin/drush --yes entity:delete widget_registry_source
vendor/bin/drush --yes php:eval "\Drupal\widget_type\Entity\WidgetRegistrySource::create(['status' => TRUE, 'endpoint' => '${TUGBOAT_SERVICE_URL}sites/default/files/widget-registry/corrected-registry.json', 'id' => '${TUGBOAT_PREVIEW_ID}', 'label' => 'Ephemeral Registry ${TUGBOAT_PREVIEW_REF}'])->save();"
vendor/bin/drush --yes config-set system.site page.front /user/login?destination=/admin/content/interactive-components/widget-instance
