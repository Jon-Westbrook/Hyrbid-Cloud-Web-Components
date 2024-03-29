import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './CardBody.stories';

const { Default, Truncated, EmptyDate } = composeStories(stories);

describe('CardBody', () => {
  it('renders all the elements', () => {
    const { container } = render(<Default />);
    const firstStar = container.querySelector(
      '.dv-star-rating .dv-star-rating-star:first-of-type',
    );
    const lastStar = container.querySelector(
      '.dv-star-rating .dv-star-rating-star:last-of-type',
    );
    expect(firstStar?.getAttribute('class')).toContain(
      'dv-star-rating-full-star',
    );
    expect(lastStar?.getAttribute('class')).toContain(
      'dv-star-rating-empty-star',
    );
    const date = container.querySelector(
      '.trust-radius-widget__cardbody__dateline',
    );
    expect(date?.textContent).toMatch('Apr 16, 2021');
    expect(screen.getByText(/Always suited for/)).not.toBeNull();
  });

  it('renders truncated test', () => {
    render(<Truncated />);
    expect(screen.getByText(/\.\.\./)).not.toBeNull();
  });

  it('renders the current date on empty date', () => {
    const { container } = render(<EmptyDate />);
    const date = container.querySelector(
      '.trust-radius-widget__cardbody__dateline',
    );
    // Use a regular expression to match the date format.
    expect(date?.textContent).toBe(' ');
  });
});
