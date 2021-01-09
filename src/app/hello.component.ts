import { Component, Input } from "@angular/core";

@Component({
  selector: "hello",
  template: `
    <h1>Hello {{ name }}!</h1>
    <div appHostManipulator>
      <div>Look at mee</div>
      <div></div>
    </div>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }

      .clicked {
        background: red;
      }
      .over {
        background: blue;
      }
      .leave {
        background: green;
      }
    `
  ],
  host: { class: "demo-area" }
})
export class HelloComponent {
  @Input() name: string;
}
