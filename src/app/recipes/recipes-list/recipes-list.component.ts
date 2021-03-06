import { Component, OnInit, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from "../../shared/recipe.service";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {

  constructor(public recipeService: RecipeService) { }

  ngOnInit() {
  }

}
