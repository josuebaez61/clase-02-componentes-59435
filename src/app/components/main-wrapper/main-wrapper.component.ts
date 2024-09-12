import { Component } from '@angular/core';

@Component({
  selector: 'app-main-wrapper',
  template: ` <main>
    <!-- <ng-content select="h1" /> -->
    <ng-content />
  </main>`,
  styles: `
    main {
      padding: 20px;
      margin-left: 200px;
    }
  `,
})
export class MainWrapperComponent {}
