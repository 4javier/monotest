import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent, RouterModule],
  selector: 'monotest-rem2-entry',
  template: `<monotest-nx-welcome></monotest-nx-welcome><router-outlet>`,
})
export class RemoteEntryComponent {}
