import { newSpecPage } from '@stencil/core/testing';
import { MathBar } from '../math-bar';

describe('math-bar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MathBar],
      html: `<math-bar></math-bar>`,
    });
    expect(page.root).toEqualHtml(`
      <math-bar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </math-bar>
    `);
  });
});
