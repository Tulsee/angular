import { Component } from "@angular/core";

@Component({
  selector: "sandbox",
  template: `
    <h1>hello welcome to my first Angular app</h1>
    <h3>This page designer is {{ name }}</h3>
    <ul>
      <li *ngFor="let person of name">
        {{ person }}
      </li>
    </ul>
    <ul>
      <li *ngFor="let person of name2">
        {{ person.firstName }} {{ person.lastName }}
      </li>
    </ul>
  `
})
export class SandboxComponent {
  name = ["harry", "potter", "gelen"];

  name2 = [
    {
      firstName: "harry",
      lastName: "happier"
    },
    {
      firstName: "potter",
      lastName: "peter"
    }
  ];
}
