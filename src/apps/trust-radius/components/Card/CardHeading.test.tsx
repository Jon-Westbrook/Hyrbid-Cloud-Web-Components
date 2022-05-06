import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './CardHeading.stories';

const { Default, Empty, LongText } = composeStories(stories);

describe('CardHeading', () => {
  it('renders default text', () => {
    const { container } = render(<Default />);
    expect(
      container.querySelector('.trust-radius-widget__cardheading__heading'),
    ).not.toBeNull();
    expect(screen.getByText('Foo is the bar')).not.toBeNull();
  });

  it('renders empty text', () => {
    const { container } = render(<Empty />);
    expect(
      container.querySelector('.trust-radius-widget__cardheading__heading'),
    ).not.toBeNull();
  });

  it('truncates long text', () => {
    const { container } = render(<LongText />);
    expect(
      container.querySelector('.trust-radius-widget__cardheading__heading'),
    ).not.toBeNull();
    expect(screen.getByText(/\.\.\./)).not.toBeNull();
  });
});
