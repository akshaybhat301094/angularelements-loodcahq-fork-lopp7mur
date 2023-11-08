import {
  Input,
  Component,
  ViewEncapsulation,
  ChangeDetectorRef,
} from "@angular/core";
import '@spectrum-web-components/theme/theme-light.js';
import '@spectrum-web-components/theme/scale-large.js';

import '@spectrum-web-components/theme/sp-theme.js';
import '@spectrum-web-components/button/sp-button.js';
import '@spectrum-web-components/icons-workflow/icons/sp-icon-add.js';
import '@spectrum-web-components/icons-workflow/icons/sp-icon-remove.js';

@Component({
  selector: "my-counter",
  template: `
  <sp-theme scale="large" color="light">
    <sp-button (click)="dec()"><sp-icon-remove slot="icon"></sp-icon-remove></sp-button>
    <span>{{count}}</span>
    <sp-button (click)="inc()"><sp-icon-add slot="icon"></sp-icon-add></sp-button>
  </sp-theme>
  `,
  styles: [
    `
      span {
        width: 4rem;
        display: inline-block;
        text-align: center;
      }

      button {
        width: 64px;
        height: 64px;
        border: none;
        border-radius: 10px;
        background-color: seagreen;
        color: white;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export default class MyCounter {
  @Input() count: number = 5;

  constructor(private cd: ChangeDetectorRef) {}

  dec() {
    this.count--;
    this.cd.detectChanges();
  }

  inc() {
    this.count++;
    this.cd.detectChanges();
  }
}
