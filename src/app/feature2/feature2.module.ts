import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Feature2Component } from "./feature2.component";

@NgModule({
  declarations: [Feature2Component],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: Feature2Component
      }
    ])
  ]
})
export class Feature2Module {}
