import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-inner1",
  template: `<h2>Inner 1</h2>`,
  styles: []
})
export class Inner1Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
