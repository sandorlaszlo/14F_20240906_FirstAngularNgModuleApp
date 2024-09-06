import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    message = "Welcome";
    a = 45;
    b = 23;

    counter = 0;

    IncCounter() {
      //let counter = 0;
      this.counter++;
    }
}
