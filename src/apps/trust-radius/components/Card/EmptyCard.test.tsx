import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './EmptyCard.stories';

const { Default } = composeStories(stories);

describe('EmptyCard', () => {
  it('renders default empty text', () => {
    render(<Default />);
    const element = screen.getByText(/This review contains no quotes./i);
    expect(element).not.toBeNull();
  });
});
