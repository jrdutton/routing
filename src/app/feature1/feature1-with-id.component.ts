import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-feature1-with-id",
  template: `
    <h1>Feature 1 With Id</h1>
    <div style="background-color: yellow;">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class Feature1WithIdComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
