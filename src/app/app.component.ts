import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div>
      <a [routerLink]="['feature1']">Feature 1</a>
    </div>
    <div>
      <a [routerLink]="['feature1', '123456']">Feature 1 With Id</a>
    </div>
    <div>
      <a [routerLink]="['feature2']">Feature 2</a>
    </div>
    <div>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class AppComponent {}
