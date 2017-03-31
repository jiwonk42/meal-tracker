import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <ul>
      <li [class]="calorieColor(currentMeal)" (click)="isEaten(currentMeal)" *ngFor="let currentMeal of meals">
      Name: {{currentMeal.name}}; Details: {{currentMeal.detail}}; Calories: {{currentMeal.calorie}}   <button (click)="editMeal(currentMeal)">Edit!</button></li>
    </ul>
    <hr>

    <div *ngIf="selectedMeal">
      <h3>Edit Meal</h3>
      <label>Name:</label>
      <input [(ngModel)]="selectedMeal.name">
      <label>Details:</label>
      <input [(ngModel)]="selectedMeal.detail">
      <label>Calories:</label>
      <input [(ngModel)]="selectedMeal.calorie">
      <button (click)="finishedEditing()">Done</button>
    </div>
  </div>
  `
})

export class AppComponent {
  meals: Meal[] = [
    new Meal('Hamburger', 'buns, ham, lettuce, tomato, bbq sauce', 600),
    new Meal('Mac n Cheese', 'cheese, noodles', 400),
    new Meal('Pho', 'noddles, broth', 300)
  ];
  selectedMeal = null;

  editMeal(clickedMeal) {
    this.selectedMeal = clickedMeal;
  }

  isEaten(clickedMeal: Meal) {
    if (clickedMeal.eaten === true) {
      alert("You already ate it?!!");
    } else {
      alert("Eat it now!");
    }
  }

  calorieColor(currentMeal) {
    if (currentMeal.calorie >= 500) {
      return "bg-danger";
    } else {
      return "bg-success";
    }
  }

  finishedEditing() {
    this.selectedMeal = null;
  }
}

export class Meal {
  public eaten: boolean = false;
  constructor(public name: string, public detail: string, public calorie: number) {}
}
