import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'monotest-testchild',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './testchild.component.html',
  styleUrls: ['./testchild.component.scss'],
})
export class TestchildComponent {}
