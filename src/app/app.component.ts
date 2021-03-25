import { Component } from '@angular/core';

@Component({
  //{}=obje demek
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'northwind2';
  user: string = 'Engin Demiroğ';
  
}
