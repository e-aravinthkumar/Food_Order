import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  foods: Food[] = [];
  constructor(private foodService:FoodService, activatedRoute: ActivatedRoute){
    this.foods = foodService.getAllFoods()
    activatedRoute.params.subscribe(params=>{
      if(params?.['searchTerm'])
        this.foods = this.foodService.getFoodsBySearchTerm(params?.['searchTerm']);
        else if(params?.['tag'])
        this.foods = this.foodService.getFoodsByTag(params?.['tag']);
        else
        this.foods = foodService.getAllFoods();
    })
  }

}
