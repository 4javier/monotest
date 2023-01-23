import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { TestLibModule } from '@monotest/test-lib'

@Component({
  standalone: true,
  imports: [ RouterModule, TestLibModule],
  selector: 'monotest-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shell';
}
