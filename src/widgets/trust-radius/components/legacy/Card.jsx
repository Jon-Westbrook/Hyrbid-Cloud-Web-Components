import React, { useRef } from 'react';
import Googlestars from './Googlestars';
import StarRatings from 'react-star-ratings';
import Slider from 'react-slick';
import moment from 'moment';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import Truncate from 'react-truncate';
import parse from 'html-react-parser';

function Card({ width, data, stars, theme }) {
  const customSlider = useRef();

  let slidesToShowAndScroll;

  if (width >= 1312) {
    slidesToShowAndScroll = 4;
  } else if (width >= 672) {
    slidesToShowAndScroll = 2;
  } else {
    slidesToShowAndScroll = 1;
  }

  const numRows = Math.ceil(data.data.length / slidesToShowAndScroll);
  let starsDisplay;
  const product = data.config.products[0];
  if (stars === 'true') {
    starsDisplay = (
      <Googlestars
        product={product.name}
        count={String(product.rating.count)}
        score={String(product.rating.trScore)}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShowAndScroll,
    slidesToScroll: slidesToShowAndScroll,
    nextArrow: false,
    prevArrow: false,
    appendDots: function appendDotsFunc(dots) {
      return (
        <div
          style={{
            color: '#000',
            backgroundColor: '#f3f4f8',
            borderRadius: '0px',
            padding: '10px',
            border: '0px',
          }}
        >
          <div css={styles.navdiv} className="navdiv">
            <button
              className="button ibm-btn-small"
              css={styles.previous}
              onClick={() => customSlider.current.slickPrev()}
            ></button>
            <ul css={styles.numlist} className="body-short-01">
              {' '}
              {dots}{' '}
            </ul>
            <ul className="body-short-01" css={styles.numlist}>
              {' '}
              /{' '}
            </ul>{' '}
            <ul css={styles.numlist} className="body-short-01">
              &nbsp; {numRows} &nbsp;
            </ul>
            <button
              className="button ibm-btn-small"
              css={styles.next}
              onClick={() => customSlider.current.slickNext()}
            ></button>
          </div>
        </div>
      );
    },
    customPaging: function customPagingFunc(i) {
      return (
        <div
          className="page"
          style={{
            width: '30px',
            border: '0px blue solid',
          }}
        >
          {i + 1}
        </div>
      );
    },
  };

  var reviewLink = `https://www.trustradius.com/products/${product.slug}/reviews?rk=ibmcvs20181&utm_campaign=tqw&utm_medium=widget&utm_source=www.trustradius.com&trtid=36d1014e-506a-4f6f-950b-7b22b55ffdc6`;

  return (
    <div
      css={[styles.widget, styles[theme]]}
      className="Widget ibm-grid-seamless ibm-background-gray-20"
    >
      {starsDisplay}
      <a href={reviewLink} css={styles.cardlinks} target="_new">
        <div
          css={styles.headlink}
          className="ibm-pt-2 ibm-pb-1 ibm-textcolor-gray-90 headlink"
        >
          <span>What {product.name} customers are saying on</span>
          <img
            css={styles.headimage}
            src="https://d30ia583fbtg8i.cloudfront.net/images/trustradius-wordmark-blue-240-40.png"
            className="ibm-downsize"
            alt="TrustRadius logo"
          ></img>
        </div>
      </a>
      <div
        className="ibm-grid-container"
        data-items=".ibm-card"
        css={styles.gridwise}
      >
        <div className="ibm-grid-col-sm-4-4">
          <div className="cardContainer" css={styles.quidproquo}>
            <Slider
              ref={(slider) => (customSlider.current = slider)}
              {...settings}
            >
              {data.data.map(function (review, i) {
                var cardlink = 'https://www.trustradius.com/reviews/';
                var trun = '';
                const quote = review.quotes[0];
                return (
                  <a
                    key={i}
                    css={styles.cardlinks}
                    href={cardlink + quote.review.slug}
                    target="_new"
                  >
                    <div className="ibm-card" css={styles.cardheight}>
                      <div
                        className="ibm-card__content"
                        css={styles.cardcontent}
                      >
                        <p className="heading ibm-type-e" css={styles.heading}>
                          <Truncate lines={3} ellipsis={<span>... </span>}>
                            {quote.review.heading}
                          </Truncate>
                        </p>
                        <div>
                          <StarRatings
                            rating={quote.rating / 2}
                            starRatedColor="#1f71ff"
                            numberOfStars={5}
                            starDimension="12px"
                            starSpacing="1px"
                          />

                          <span className="caption-01" css={styles.dateline}>
                            {' '}
                            {moment(quote.review.modified).format(
                              'MMM Do YYYY',
                            )}
                          </span>
                        </div>
                        <div className="ibm-rule" css={styles.cardhr}>
                          <hr css={styles.cardhr}></hr>
                        </div>

                        {review.quotes.forEach(function (text) {
                          trun += `${text.text}<br/><br/>`;
                          trun += ' ';
                        })}
                        <div css={styles.content} className="content ibm-pb-1">
                          <Truncate lines={7} ellipsis={<span>... </span>}>
                            {parse(trun)}
                          </Truncate>
                        </div>
                        <div className="footer ibm-type-a" css={styles.byline}>
                          {review.name.first} {review.name.last}
                          <br></br>
                          {review.position.title}
                          <br></br>
                          {review.company.name}
                          <br></br>
                          {review.company.industry.name} {review.company.size}
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
      <div css={styles.readlinkcont}>
        <a
          css={styles.readlink}
          className="ibm-ind-link ibm-pb-1 ibm-type-c"
          href={reviewLink}
          target="_new"
        >
          Read all reviews{' '}
        </a>
      </div>
    </div>
  );
}

const styles = {
  readlink: css`
    margin-left: 55px;
    position: relative;
    position: relative;
    background-color: #f3f4f8;
    bottom: 95px;
    text-decoration: none !important;
    font-family: 'IBM Plex Sans';
    &:after {
      font-family: icons-ibm-v12;
      content: '\f1ac';
      font-size: 15px;
      top: 1px;
      position: relative;
    }
  `,
  headlink: css`
    color: #171717;
    font-family: 'IBM Plex Sans';
    font-size: 20px;
    letter-spacing: 0;
    line-height: 26px;
    margin-left: 55px;
    & span {
      padding-right: 4px;
    }
  `,
  heading: css`
    height: 75px;
    color: #282828;
    font-family: 'IBM Plex Sans';
    font-size: 20px;
    letter-spacing: 0;
    line-height: 26px;
  `,
  readlinkcont: css`
    border: 0px;
    &:hover {
      text-decoration: none !important;
    }
  `,
  cardlinks: css`
    text-decoration: none !important;
  `,
  quidproquo: css`
    padding: 0px !important;
    & .slick-dots {
      padding: 0px !important;
    }
  `,
  content: css`
    color: #282828;
    font-family: 'IBM Plex Sans';
    font-size: 16px;
    letter-spacing: 0;
    line-height: 22px;
  `,
  widget: css`
    height: 597px;
    & .slick-arrow {
      display: none !important;
    }
    & .slick-slider {
      height: 515px;
    }
  `,
  gridwise: css`
    @media (min-width: 1584px) {
      margin-left: 16px !important;
      margin-right: 16px !important;
    }
  `,
  headimage: css`
    width: 160px;
  `,
  dateline: css`
    float: right;
    font-family: 'IBM Plex Sans';
    font-size: 12px;
    letter-spacing: 0.32px;
    color: #393939;
  `,
  byline: css`
    height: 32px;
    color: #393939;
    font-family: 'IBM Plex Sans';
    font-size: 12px;
    letter-spacing: 0.32px;
    line-height: 16px;
    position: absolute;
    top: 342px;
    padding-top: 10px;
    padding-bottom: 12px;
    z-index: 1;
  `,
  cardheight: css`
    height: 450px;
    overflow: hidden;
    color: #000 !important;
    text-decoration: none;

    &:hover {
      text-decoration: none;
      background-color: #e6e8ec;
    }
  `,
  cardcontent: css`
    height: 350px;
    overflow: hidden;
    padding: 16px !important;
    &:hover {
      text-decoration: none;
    }
  `,
  cardhr: css`
    border-top: 1px solid #bebebe;
    &:hover {
      text-decoration: none;
    }
  `,
  navdiv: css`
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: #f2f4f8;
  `,
  next: css`
    width: 40px;
    height: 40px;
    background-color: #1f71ff;
    color: #fff;
    font-family: icons-ibm-v12;
    font-size: 25px;
    float: right;
    position: relative;
    bottom: 10px;
    border: 0px;
    &:after {
      font-family: icons-ibm-v12;
      content: '\f1c3';
    }
    & :hover {
      background-color: #0f62fe;
      color: #fff;
      border: 0px;
    }
    & a:active {
      border: 0px;
    }
    margin-right: 1rem;
  `,
  previous: css`
    width: 40px;
    height: 40px;
    background-color: #1f71ff;
    border: 0px;
    color: #fff;
    font-family: icons-ibm-v12;
    font-size: 25px;
    margin-right: 10px;
    float: left;
    position: relative;
    bottom: 10px;
    left: 10px;
    &:after {
      font-family: icons-ibm-v12;
      content: '\f1ce';
    }
    &:hover {
      color: #fff;
      background-color: #0f62fe;
      border: 0px;
    }
    &:active {
      border: 0px;
    }
  `,
  numlist: css`
    margin: 0px !important;
    font-family: 'IBM Plex Sans';
    & li.slick-active {
      margin-left: 0px !important;
    }
    & li {
      display: none;
    }
    & .slick-active {
      display: block;
    }
  `,
  light: css`
    background-color: #f2f4f8;

    .ibm-card {
      border: 1px solid #f4f4f4;
    }

    .page {
      color: #000;
    }
  `,
  gray: css`
    background-color: #fff;

    & .slick-dots {
      background-color: #161616 !important;
    }

    .ibm-card {
      border: 1px solid #fff;
      background: #f2f4f8;
    }

    .cardContainer {
      background-color: #f2f4f8;
    }

    .page {
      color: #000;
    }
  `,
  dark: css`
    background-color: #161616;

    & .slick-dots {
      background-color: #161616 !important;
    }

    .ibm-card {
      color: #f3f3f3;
      border: 1px solid #161616;
      background: #252525;

      &:hover {
        background-color: #353535;
      }
    }

    .ibm-ind-link,
    .navdiv,
    .cardContainer {
      background-color: #161616;
    }

    .headlink,
    .heading,
    .content,
    .ibm-card__content,
    .body-short-01,
    .page {
      color: #f3f3f3;
    }

    .caption-01,
    .footer {
      color: #c6c6c6;
    }

    .ibm-rule,
    .ibm-rule hr {
      border-top: 1px solid #565656;
    }
  `,
};

Card.propTypes = {
  stars: PropTypes.string,
  data: PropTypes.any,
  width: PropTypes.number,
  theme: PropTypes.string,
};

export default Card;
