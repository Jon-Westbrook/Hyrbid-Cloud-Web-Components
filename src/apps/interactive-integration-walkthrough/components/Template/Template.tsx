import { fluidScale, fluidShrink } from '../../theme/mixins';
import { theme } from '../../constants';
import Text from '../Text/Text';
import './Template.scss';

type TemplateProps = {
  navigation: React.ReactNode;
  children: React.ReactNode;
};
function Template({ navigation, children }: TemplateProps) {
  return (
    <article
      style={{
        gridTemplate: gridTemplateStyles,
        columnGap: columnGapStyles,
        padding: paddingStyles,
      }}
      className="interactive-widget__template"
    >
      <header className="interactive-widget__template-header">
        <Text
          as="h3"
          intl="widget.title"
          className="interactive-widget__title"
        />
        <Text
          as="p"
          intl="widget.subtitle"
          className="interactive-widget__body"
        />
      </header>
      <aside className="interactive-widget__aside">{navigation}</aside>
      <section className="interactive-widget__main">{children}</section>
    </article>
  );
}

const gridTemplateStyles = `
  'header .' auto
  'aside main' auto / ${fluidShrink(theme.sidebarMaxWidth)} minmax(0, 1fr)
`;

const columnGapStyles = `
  ${fluidScale('80px', '32px')}
`;

const paddingStyles = `
  2rem 2rem ${fluidScale('80px', '32px')}
`;

export default Template;
