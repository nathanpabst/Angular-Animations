import { Component } from '@angular/core';
import { trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState')
  ]
})
export class AppComponent {
  list = ['Milk', 'Sugar', 'Bread'];
}
