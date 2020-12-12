import { newE2EPage } from '@stencil/core/testing';

describe('question-box', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<question-box></question-box>');

    const element = await page.find('question-box');
    expect(element).toHaveClass('hydrated');
  });
});
