/** @jsxImportSource @emotion/react */
import React, {
  EventHandler,
  Fragment,
  KeyboardEventHandler,
  ReactElement,
  SyntheticEvent,
  useState,
} from 'react';
import { FormattedMessage, MessageDescriptor } from 'react-intl';
import { ChevronDown32, ChevronUp32 } from '@carbon/icons-react';
import { css } from '@emotion/react';
import ProductDetail from './ProductDetail';
import { useAppSelector } from '../lib/redux/hooks';
import { ReactComponent as DataSecurityIcon } from '../assets/images/icons/data-security.svg';
import { ReactComponent as IamIcon } from '../assets/images/icons/iam.svg';
import { ReactComponent as PlatformIcon } from '../assets/images/icons/platform.svg';
import { ReactComponent as ServicesIcon } from '../assets/images/icons/services.svg';
import { ReactComponent as SiemIcon } from '../assets/images/icons/siem.svg';
import { ReactComponent as SoarIcon } from '../assets/images/icons/soar.svg';

const ProductsDisplay = (): ReactElement<void> => {
  const categories = useAppSelector((state) => state.categories);
  const messages = useAppSelector<Record<string, MessageDescriptor>>(
    (state) => state.messages,
  );
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleInteraction: EventHandler<SyntheticEvent<HTMLDivElement>> = (
    e,
  ) => {
    if (selectedCategory === e.currentTarget.dataset.category) {
      setSelectedCategory('');
    } else {
      setSelectedCategory(e.currentTarget.dataset.category || '');
    }
  };

  const handleKeyPress: KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === 'Enter') {
      handleInteraction(e);
    }
  };

  function generateIconMarkup(categoryIcon: string, categoryName: string) {
    if (categoryIcon.includes('data-security')) {
      return <DataSecurityIcon className="icon" aria-hidden="true" />;
    } else if (categoryIcon.includes('iam')) {
      return <IamIcon className="icon" aria-hidden="true" />;
    } else if (categoryIcon.includes('platform')) {
      return <PlatformIcon className="icon" aria-hidden="true" />;
    } else if (categoryIcon.includes('services')) {
      return <ServicesIcon className="icon" aria-hidden="true" />;
    } else if (categoryIcon.includes('siem')) {
      return <SiemIcon className="icon" aria-hidden="true" />;
    } else if (categoryIcon.includes('soar')) {
      return <SoarIcon className="icon" aria-hidden="true" />;
    } else {
      return (
        <div>
          <img
            className="icon"
            aria-hidden="true"
            src={categoryIcon}
            alt={`Icon for ${categoryName}`}
          />
        </div>
      );
    }
  }

  return (
    <div css={styles.grid}>
      {categories.map((category, i) => {
        return (
          <Fragment key={`category-${i}`}>
            <div
              css={styles.tileWrapper}
              onKeyPress={handleKeyPress}
              onClick={handleInteraction}
              data-category={category.name}
              data-i={i}
              tabIndex={0}
            >
              <div
                css={styles.tile}
                className={selectedCategory === category.name ? 'selected' : ''}
              >
                {generateIconMarkup(category.icon, category.name)}
                <div css={styles.nameChevron}>
                  <h4 css={styles.name}>
                    <FormattedMessage
                      {...messages[`${category.translationId}Name`]}
                    />
                  </h4>
                  <>
                    {selectedCategory === category.name ? (
                      <ChevronUp32 />
                    ) : (
                      <ChevronDown32 />
                    )}
                  </>
                </div>
              </div>
            </div>
            <ProductDetail
              category={categories[i]}
              products={categories[i].products}
              index={i}
              selected={categories[i].name === selectedCategory}
            />
          </Fragment>
        );
      })}
    </div>
  );
};

const styles = {
  grid: css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: 1055px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 671px) {
      grid-template-columns: repeat(1, 1fr);
    }
  `,
  tileWrapper: css`
    padding: 1px;
  `,
  tile: css`
    color: #fff;
    height: 156px;
    padding: 1rem;
    background-color: #282828;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: background-color 0.25s;

    img.icon,
    svg.icon {
      height: 40px;
      width: 40px;
      transition: height 0.25s;
    }

    &:hover {
      background-color: #353535;
    }

    &.selected {
      background-color: #fff;
      color: #000;

      img.icon,
      svg.icon {
        height: 60px;
        width: 60px;
      }

      h4 {
        visibility: hidden;
      }

      span {
        color: #408bfc;
      }
    }

    span {
      color: #fff;
    }

    @media (max-width: 671px) {
      height: auto;
      flex-direction: row;
      align-items: center;

      img.icon,
      svg.icon {
        margin-right: 1rem;
        height: 40px;
        width: 40px;
      }

      &.selected {
        img.icon,
        svg.icon {
          height: 30px;
          width: 60px;
        }
      }
    }
  `,
  nameChevron: css`
    display: flex;
    justify-content: space-between;
    width: 100%;
  `,
  name: css`
    font-size: 1.5rem;
    padding: 0;

    @media (max-width: 1055px) {
      font-size: 1.25rem;
    }
  `,
};

export default ProductsDisplay;
