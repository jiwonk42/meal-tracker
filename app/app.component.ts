import { Component } from '@angular/core';
import { Meal } from './meal';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <meal-list [childMealList]="masterMealList" (clickSender)="editMeal($event)"></meal-list>
    <hr>
    <edit-meal [childSelectedMeal]="selectedMeal" (doneButtonClickedSender)="finishedEditing()"></edit-meal>
  </div>
  `
})

export class AppComponent {

  selectedMeal = null;

  masterMealList: Meal[] = [
    new Meal('Hamburger', 'buns, ham, lettuce, tomato, bbq sauce', 600),
    new Meal('Mac n Cheese', 'cheese, noodles', 400),
    new Meal('Pho', 'noddles, broth', 300)
  ];

  editMeal(clickedMeal) {
    this.selectedMeal = clickedMeal;
  }

  finishedEditing() {
    this.selectedMeal = null;
  }
}
