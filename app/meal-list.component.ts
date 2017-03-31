import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal';

@Component({
  selector: 'meal-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="allCalories" selected="selected">All Meals</option>
     <option value="highCalorie">High Calories</option>
     <option value="lowCalorie">Low Calories</option>
  </select>
  <ul>
    <li *ngFor="let currentMeal of childMealList | category:filterByCalorie">
    Name: {{currentMeal.name}}; Details: {{currentMeal.detail}}; Calories: {{currentMeal.calorie}}   <button (click)="editButton(currentMeal)">Edit!</button></li>
  </ul>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();

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
  filterByCalorie: string = "allCalories";

  onChange(optionFromMenu) {
    this.filterByCalorie = optionFromMenu;
  }
}
