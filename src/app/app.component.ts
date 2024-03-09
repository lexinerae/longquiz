import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Declare selectedRecipe here
  selectedRecipe: any; // You can replace 'any' with the actual type if needed
  title = 'longquiz';
}
