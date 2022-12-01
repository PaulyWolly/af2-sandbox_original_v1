import { Component } from '@angular/core';
import * as data from './../../shared/json/cars.json';

@Component({
    selector: 'muscle-cars-pagination',
    templateUrl: 'muscle-cars-pagination.html',
    styleUrls: ['muscle-cars-pagination.css']
})
export class MuscleCarsPagination {
    cars:any = [];

    data:any = data;

    constructor(){
      for(let key in data.muscleCars){
        if(data.muscleCars.hasOwnProperty(key)){
          this.cars.push(data.muscleCars[key])
        }
      }
    }
}
