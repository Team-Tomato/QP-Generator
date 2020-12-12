import { html } from 'lit-html';

export default {
    title: 'My Component/Mathbar',
};


const Template = ({ first, middle, last }) => html`<math-bar first="${first}" middle="${middle}" last="${last}" />`;
export const mathbar = Template.bind({});
mathbar.args = {
    first: 'Millie',
    middle: 'Bobby',
    last: 'Brown'
};