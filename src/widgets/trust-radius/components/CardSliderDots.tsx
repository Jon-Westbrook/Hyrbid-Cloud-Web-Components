/** @jsxImportSource @emotion/react */
import React from 'react';
import { css, SerializedStyles } from '@emotion/react';

export interface CardSliderDotsProps {
  numRows: number;
}

const CardSliderDots: React.FC<CardSliderDotsProps> = ({
  children,
  numRows,
}) => {
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
        <button className="button ibm-btn-small" css={styles.previous} />
        <ul css={styles.numlist} className="body-short-01">
          {' '}
          {children}{' '}
        </ul>
        <ul className="body-short-01" css={styles.numlist}>
          {' '}
          /{' '}
        </ul>{' '}
        <ul css={styles.numlist} className="body-short-01">
          &nbsp; {numRows} &nbsp;
        </ul>
        <button className="button ibm-btn-small" css={styles.next} />
      </div>
    </div>
  );
};

const styles: Record<string, SerializedStyles> = {
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
};

export default CardSliderDots;
