import { Component } from "@angular/core";

@Component({
  selector: "sandbox",
  template: `
    <h1>hello welcome to my first Angular app</h1>
    <hr />
    <h5>
      Hello
      <!--
      <span *ngIf="showName">{{ name }}</span>
      <span *ngIf="!showName">world</span>
      -->
      <p>{{ showName ? name : "world" }}</p>
    </h5>
    <hr />
    <div [ngSwitch]="case">
      <div *ngSwitchCase="'1'">hello world</div>
      <div *ngSwitchCase="'2'">Hi there</div>
      <div *ngSwitchCase="'3'">whats up</div>
      <div *ngSwitchDefault>hello</div>
    </div>
  `
})
export class SandboxComponent {
  name: string = "tulsee";
  showName: boolean = true;
  case: number = 3;
}
