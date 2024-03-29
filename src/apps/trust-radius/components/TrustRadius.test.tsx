import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './TrustRadius.stories';

const { Loading, FailedRequest } = composeStories(stories);

describe('TrustRadius', () => {
  it('renders a spinner while loading', () => {
    const { container } = render(<Loading />);
    const element = container.querySelector('.bx--loading');
    expect(element).not.toBeNull();
  });

  it('renders an error message on failure', async () => {
    render(<FailedRequest />);
    const element = await screen.findByText(
      'There was a problem loading Trust Radius reviews. Please try again later.',
    );
    expect(element).not.toBeNull();
  });
});
