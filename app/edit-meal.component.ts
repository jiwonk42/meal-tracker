import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal';

@Component({
  selector: 'edit-meal',
  template: `
  <div *ngIf="childSelectedMeal">
    <br>
    <h3>Edit Meal</h3>
    <br>
    <label>Name:</label>
    <input [(ngModel)]="childSelectedMeal.name">
    <label>Details:</label>
    <input [(ngModel)]="childSelectedMeal.detail">
    <label>Calories:</label>
    <input [(ngModel)]="childSelectedMeal.calorie">
    <button class="btn btn-success" (click)="doneButtonClicked()">Done</button>
  </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
