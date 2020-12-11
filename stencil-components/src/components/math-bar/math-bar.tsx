import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'math-bar',
  styleUrl: 'math-bar.css',
  shadow: true,
})
export class MathBar {

  @Prop() last: string;

  render() {
    return (
      <div class="icon-bar">
      <a class="active" href="#">Integral</a>
      <a href="#">Differential</a>
      <a href="#">Power</a>
      <a href="#">Sq.Root</a>
      <a href="#">Cubic Root</a>
    </div>
    );
  }

}
