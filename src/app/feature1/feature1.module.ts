import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Feature1MenuComponent } from "./feature1-menu.component";
import { Feature1WithIdComponent } from "./feature1-with-id.component";
import { Feature1Component } from "./feature1.component";
import { Feature1MenuWithIdComponent } from "./feature1-menu-with-id.component";

@NgModule({
  declarations: [
    Feature1Component,
    Feature1MenuComponent,
    Feature1WithIdComponent,
    Feature1MenuWithIdComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: Feature1Component
      },
      {
        path: ":Id",
        component: Feature1WithIdComponent
      },
      {
        path: "",
        component: Feature1MenuComponent,
        outlet: "menu"
      },
      {
        path: ":Id",
        component: Feature1MenuWithIdComponent,
        outlet: "menu"
      }
    ])
  ]
})
export class Feature1Module {}
