import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Nonna\'s Lasagne', 'Best lasagna ever', 'https://www.freeimageslive.co.uk/files/images009/lasagne_plated.preview.jpg')
,
    new Recipe('Lemon Meringue Pie', 'Pie!', 'https://c.pxhere.com/photos/d7/e2/cake_Cakes_Foods_Meringue_Pie_Pies-1618330.jpg!d')
  ];

  // note: can't listen to the event of a child of a child aka grandchild
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipeElement: Recipe): void {
    this.recipeWasSelected.emit(recipeElement);
  }
}
