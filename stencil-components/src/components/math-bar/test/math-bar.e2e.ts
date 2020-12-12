import { newE2EPage } from '@stencil/core/testing';

describe('math-bar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<math-bar></math-bar>');

    const element = await page.find('math-bar');
    expect(element).toHaveClass('hydrated');
  });
});
