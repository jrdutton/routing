import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-layout1",
  template: `
    <div style="background-color: aqua;">
      <router-outlet name="menu"></router-outlet>
    </div>
    <div style="background-color: blue;">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class Layout1Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
