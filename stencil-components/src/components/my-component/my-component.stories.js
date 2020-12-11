import { html } from 'lit-html';

export default {
    title: 'My Component/Component',
};


const Template = ({ first, middle, last }) => html`<my-component first="${first}" middle="${middle}" last="${last}" />`;
export const component = Template.bind({});
component.args = {
    first: 'Millie',
    middle: 'Bobby',
    last: 'Brown'
};