import 'whatwg-fetch';
import React, { useEffect, useState } from 'react';
import Card from './Card';
/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from '@emotion/react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

function TrustRadius({ element }) {
  function getWidth() {
    return window.innerWidth;
  }

  const [width, setWidth] = useState(getWidth);
  const [palette] = useState(element.getAttribute('data-trust-radius-pallete'));
  const [googlestars] = useState(
    element.getAttribute('data-trust-radius-google-stars'),
  );
  const [trid] = useState(element.getAttribute('data-trust-radius-id'));
  const [status, setStatus] = useState('loading');
  const [data, setData] = useState(null);

  useEffect(() => {
    function handleResize() {
      setWidth(getWidth());
    }

    window.addEventListener('resize', debounce(handleResize, 500));
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await window.fetch(
          `https://www.trustradius.com/api/v2/tqw/${trid}`,
        );
        return response.json();
      } catch (e) {
        console.error(e);
        setStatus('error');
      }
    };
    fetchData().then((data) => {
      setData(data);
      setStatus('ready');
    });
  }, [trid]);

  return (
    <div
      css={[styles.widget, styles[palette]]}
      className="Widget ibm-grid-seamless"
    >
      <div css={styles.widgetWrapper}>
        {status === 'loading' && (
          <div css={styles.message}>
            <p className="ibm-spinner ibm-p ibm-mt-2 ibm-mb-2 ibm-center"></p>
          </div>
        )}
        {status === 'ready' && (
          <Card
            data={data}
            palette={palette}
            width={width}
            stars={googlestars}
            theme={palette}
          />
        )}
        {status === 'error' && (
          <div css={styles.message}>
            <p>
              The was a problem loading Trust Radius reviews. Please try again
              later.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

TrustRadius.propTypes = {
  element: PropTypes.instanceOf(Element),
};

const styles = {
  widget: css`
    @media (max-width: 32px) {
      height: 650px;
    }
    @media (min-width: 321px) {
      height: 622px;
    }
    & .slick-arrow {
      display: none !important;
    }
  `,
  widgetWrapper: css`
    max-width: 1584px;
    margin: 0 auto;
  `,
  light: css`
    background-color: #f2f4f8;
  `,
  dark: css`
    background-color: #161616;
  `,
  gray: css`
    background-color: #fff;
  `,
  message: css`
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};

export default TrustRadius;
