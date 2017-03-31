import {Pipe, PipeTransform} from '@angular/core';
import {Meal} from './meal';

@Pipe({
  name: "category",
  pure: false
})


export class CategoryPipe implements PipeTransform {
  transform(input: Meal[], category){
    var output: Meal[] = [];
    if (category === "highCalorie"){
      for (let i = 0; i < input.length; i++) {
        if(input[i].calorie >= 500)
        {
          output.push(input[i]);
        }
      }
      return output;
    }
    else if (category === "lowCalorie"){
      for (let i = 0; i < input.length; i++) {
        if(input[i].calorie < 500)
        {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
