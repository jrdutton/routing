import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Feature1MenuWithIdComponent } from "./feature1-menu-with-id.component";
import { Feature1MenuComponent } from "./feature1-menu.component";
import { Feature1WithIdComponent } from "./feature1-with-id.component";
import { Feature1Component } from "./feature1.component";
import { Inner1Component } from "./inner1.component";
import { Inner2Component } from "./inner2.component";

@NgModule({
  declarations: [
    Feature1Component,
    Feature1MenuComponent,
    Feature1WithIdComponent,
    Feature1MenuWithIdComponent,
    Inner1Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        children: [
          {
            path: "",
            component: Feature1Component
          },
          {
            path: "",
            component: Feature1MenuComponent,
            outlet: "menu"
          }
        ]
      },
      {
        path: ":Id",
        children: [
          {
            path: "",
            component: Feature1WithIdComponent,
            children: [
              {
                path: "inner1",
                component: Inner1Component
              },
              {
                path: "inner2",
                component: Inner2Component
              }
            ]
          },
          {
            path: "",
            component: Feature1MenuWithIdComponent,
            outlet: "menu"
          }
        ]
      }
    ])
  ]
})
export class Feature1Module {}
