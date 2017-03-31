import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <ul>
      <li (click)="isEaten(currentMeal)" *ngFor="let currentMeal of meals">
      Name: {{currentMeal.name}}; Details: {{currentMeal.detail}}; Calories: {{currentMeal.calorie}}   <button (click)="editMeal()">Edit!</button></li>
    </ul>
  </div>
  `
})

export class AppComponent {
  meals: Meal[] = [
    new Meal('Hamburger', 'buns, ham, lettuce, tomato, bbq sauce', 600),
    new Meal('Mac n Cheese', 'cheese, noodles', 400),
    new Meal('Pho', 'noddles, broth', 300)
  ];

  editMeal() {
    alert("Edit a meal??");
  }

  isEaten(clickedMeal: Meal) {
    if (clickedMeal.eaten === true) {
      alert("You already ate it?!!");
    } else {
      alert("Eat it now!");
    }
  }
}

export class Meal {
  public eaten: boolean = false;
  constructor(public name: string, public detail: string, public calorie: number) {}
}
