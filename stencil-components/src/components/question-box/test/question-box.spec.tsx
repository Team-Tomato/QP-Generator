import { newSpecPage } from '@stencil/core/testing';
import { QuestionBox } from '../question-box';

describe('question-box', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [QuestionBox],
      html: `<question-box></question-box>`,
    });
    expect(page.root).toEqualHtml(`
      <question-box>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </question-box>
    `);
  });
});
