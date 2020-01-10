import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav-bar></nav-bar>
  <movies></movies>
  

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'congosa-tv';
}
