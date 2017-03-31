import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal';

@Component({
  selector: 'new-meal',
  template: `
  <h1>New Meal</h1>
  <div>
    <label>Name: </label>
    <input #newName>
    <label>Details: </label>
    <input #newDetail>
    <label>Calories: </label>
    <input #newCalorie>
    <button (click)="submitForm(newName.value, newDetail.value, newCalorie.value)">Add</button>
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
