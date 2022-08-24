/* eslint-disable formatjs/enforce-id */
import React, { ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';
import { messages, messageType } from '../../locales/messages';

type WrapperProps = {
  as: React.FC | string;
  children: React.ReactNode;
  className?: string;
};
const Wrapper = (props: WrapperProps) => {
  const { as: Cmp = 'div', ...rest } = props;
  return <Cmp {...rest}>{props.children}</Cmp>;
};

type TextProps = {
  as?: string;
  children?: React.ReactNode;
  className?: string;
  css?: React.Attributes[keyof React.Attributes];
  id?: string;
  intl: messageType;
};

const Text = ({ as = 'div', className, css, intl }: TextProps) => {
  const transformedValues: ReactNode = {
    strong: (chunks: string[]) => <strong>{chunks}</strong>,
  };

  return (
    <Wrapper as={as} css={css} className={className}>
      <FormattedMessage {...messages[intl]} values={transformedValues} />
    </Wrapper>
  );
};

export default Text;
