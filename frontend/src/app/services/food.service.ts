import { Injectable } from '@angular/core';
import { sample_foods, sample_tags } from 'src/data';
import { Food } from '../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllFoods(): Food[] {
    return sample_foods
  }

  getFoodsBySearchTerm(searchTerm: string) {
    return this.getAllFoods().filter(food => food.name.toUpperCase().includes(searchTerm.toUpperCase()))
  }

  getAllTags() {
    return sample_tags;
  }

  getFoodsByTag(tag: string) {
    return tag ==='All'? 
    this.getAllFoods() : this.getAllFoods().filter(food => food.tags?.includes(tag))
  }
}
