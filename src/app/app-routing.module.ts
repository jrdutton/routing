import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Layout1Component } from "./layout1/layout1.component";
import { Layout2Component } from "./layout2/layout2.component";

const routes: Routes = [
  {
    path: "",
    component: Layout1Component,
    children: [
      {
        path: "feature1",
        loadChildren: () =>
          import("./feature1/feature1.module")
            .then((m) => m.Feature1Module)
            .catch((err) => console.log(err))
      }
    ]
  },
  {
    path: "",
    component: Layout2Component,
    children: [
      {
        path: "feature2",
        loadChildren: () =>
          import("./feature2/feature2.module")
            .then((m) => m.Feature2Module)
            .catch((err) => console.log(err))
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
