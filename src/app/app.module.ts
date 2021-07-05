import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { Layout1Component } from "./layout1/layout1.component";
import { Layout2Component } from "./layout2/layout2.component";

@NgModule({
  declarations: [AppComponent, Layout1Component, Layout2Component],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
