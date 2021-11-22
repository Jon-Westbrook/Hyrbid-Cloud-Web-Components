import React from 'react';
import './introduction.scss';
import LinkTo from '@storybook/addon-links/react';
// @ts-ignore
import headerImg from './img/carbon.png';

const Introduction: React.FC = () => (
  <div className="usage__container">
    <h2 style={{ marginTop: '0px' }} className="ibm-h2">
      Available widgets
    </h2>
    <ul>
      <li style={{ listStyle: 'none' }}>
        <LinkTo
          className="link-item"
          kind="trust-radius-widget"
          story="page"
          target="_blank"
        >
          <span>
            <strong>Trust Radius: </strong>
            Integrates IBM products with the Trust Radius service.
          </span>
        </LinkTo>
      </li>
    </ul>
    <img
      className="usage__header-img"
      src={headerImg}
      alt="Carbon Design System"
    />
    <h2 className="ibm-h1">What are widgets?</h2>
    <p>
      Widgets types are stand alone JavaScript applications ready to use in any
      publishing context. JavaScript developers develop widgets in their own
      repositories, so they can be syndicated and embedded in publishing
      platforms. These include popular CMS, static HTML, other JavaScript
      applications, etc. Build your digital strategy using widgets to maximize
      reuse of your development efforts. Widgets are designed to allow you to
      focus on your strategy rather than on development.
    </p>
    <h2 className="ibm-h2">Develop widgets</h2>
    <p>
      Widgets can be as simple as a personalized CTA, or as complex as a full
      embedded product catalog. Widgets are a powerful tool to build reactive
      applications that are stamped all across your digital properties.
    </p>
    <h3 className="ibm-h3">Configurable</h3>
    <p>
      Your widgets can accept external input. This can affect what the color
      scheme should be, what language should be used, what is the personalized
      text for the call-to-action button, or what data source to use to fecth
      for content. This allows you to maintain a single code base powering many
      variants without code duplication.
    </p>
    <h3 className="ibm-h3">i18n</h3>
    <p>
      Widgets are ready for internationalization. Both interface text and
      content can be expressed in your users language.
    </p>
  </div>
);

export default Introduction;
