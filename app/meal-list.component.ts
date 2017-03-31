import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal';

@Component({
  selector: 'meal-list',
  template: `
  <ul>
    <li (click)="isEaten(currentMeal)" *ngFor="let currentMeal of childMealList">
    Name: {{currentMeal.name}}; Details: {{currentMeal.detail}}; Calories: {{currentMeal.calorie}}   <button (click)="editButton(currentMeal)">Edit!</button></li>
  </ul>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();

  isEaten(clickedMeal: Meal) {
    if (clickedMeal.eaten === true) {
      alert("You already ate it?!!");
    } else {
      alert("Eat it now!");
    }
  }

  editButton(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }
  // calorieColor(currentMeal) {
  //   if (currentMeal.calorie >= 500) {
  //     return "bg-danger";
  //   } else {
  //     return "bg-success";
  //   }
  // }
}
