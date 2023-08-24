import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `
  // <h1>Hello I am from inline Template</h1>
  // `,
  // styleUrls: ['./app.component.scss']
  styles: [`h1{background-color: red}`]
})
export class AppComponent {
  role = "User";
  title = 'hotelInventory';
}
