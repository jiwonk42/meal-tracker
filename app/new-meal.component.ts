import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal';

@Component({
  selector: 'new-meal',
  template: `
  <div>
    <h2>New Meal</h2>
    <br>
    <label>Name: </label>
    <input #newName>
    <label>Details: </label>
    <input #newDetail>
    <label>Calories: </label>
    <input #newCalorie>
    <button class="btn btn-info" (click)="submitForm(newName.value, newDetail.value, newCalorie.value)">Add a New Meal</button>
  </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();

  submitForm(name: string, detail: string, calorie: number) {
    var newMealToAdd = new Meal(name, detail, calorie);
    this.newMealSender.emit(newMealToAdd);
  }
}
