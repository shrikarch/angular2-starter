import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>
    {{title}}
  </h1>
  <fa-databinding></fa-databinding>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works! Oh it does!';
}
