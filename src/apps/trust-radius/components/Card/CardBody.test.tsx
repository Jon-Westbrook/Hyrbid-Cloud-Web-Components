import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './CardBody.stories';

const { Default, Truncated, EmptyDate } = composeStories(stories);

describe('CardBody', () => {
  it('renders all the elements', () => {
    const { container } = render(<Default />);
    const stars = container.querySelector('.star-ratings');
    expect(stars?.getAttribute('title')).toBe('4.5 Stars');
    const date = container.querySelector('span.caption-01');
    expect(date?.textContent).toMatch('Apr 16th 2021');
    expect(screen.getByText(/Always suited for/)).not.toBeNull();
  });

  it('renders truncated test', () => {
    render(<Truncated />);
    expect(screen.getByText(/\.\.\./)).not.toBeNull();
  });

  it('renders the current date on empty date', () => {
    const { container } = render(<EmptyDate />);
    const date = container.querySelector('span.caption-01');
    // Use a regular expression to match the date format.
    expect(date?.textContent).toMatch(/[^ ]+ [0-9][0-9]?[^ ]* [0-9]{4}/);
  });
});
