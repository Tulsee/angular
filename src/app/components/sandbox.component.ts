import { Component } from "@angular/core";

@Component({
  selector: "sandbox",
  template: `
    <h1>hello welcome to my first Angular app</h1>
    <h3>This page designer is {{ name }}</h3>
  `
})
export class SandboxComponent {
  name = "Tulsee ram ghimire";
}
