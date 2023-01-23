import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';
import { TestLibModule } from '@monotest/test-lib';
import { RouterModule } from '@angular/router';
@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent, TestLibModule, RouterModule],
  selector: 'monotest-rem1-entry',
  template: `
              <div style="background-color: blue; height: 100px; width: 100px; margin: 5px"></div>
              <router-outlet/>
            `
})
export class RemoteEntryComponent {}
