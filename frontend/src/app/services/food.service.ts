import { Injectable } from '@angular/core';
import { sample_foods } from 'src/data';
import { Food } from '../components/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllFoods():Food[]{
    return sample_foods
  }
}
