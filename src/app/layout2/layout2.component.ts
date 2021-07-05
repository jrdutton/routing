import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-layout2",
  template: `
    <div style="background-color: blue;">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class Layout2Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
