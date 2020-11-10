import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Nonna\'s Lasagne', 'Best lasagna ever', 'https://www.simplyrecipes.com/wp-content/uploads/2004/12/lasagna-horiz-a-2000-600x400.jpg')
,
    new Recipe('Nonna\'s Lasagne', 'Best lasagna ever', 'https://www.simplyrecipes.com/wp-content/uploads/2004/12/lasagna-horiz-a-2000-600x400.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
