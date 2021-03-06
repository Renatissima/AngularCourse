import { Injectable } from '@angular/core';
import { Recipe } from "../recipes/recipe.model";
import { Ingredient } from "./ingredient.model";
import { IngredientService } from "./ingredient.service";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(1,
               "Bacon Burgers on Brioche Buns",
               "The burger is a custom blend of ground prime rib, brisket, skirt steak and tenderloin, topped with Nueske’s bacon and Cowgirl Creamery’s triple-cream Mt. Tam cheese.<br>The recipe is also delicious with a mix of chuck and sirloin.",     
               ["Preheat the oven to 400°. On a rimmed baking sheet, toss the onions with 2 tablespoons of the olive oil and roast until softened, about 20 minutes.", "Meanwhile, in a small bowl, whisk the mayonnaise with the lemon juice. Gradually whisk in the remaining 1/4 cup of olive oil and season with salt and pepper.", "In a large skillet, cook the bacon over moderately high heat until crisp. Drain on paper towels and break each strip in half.", "Light a grill or preheat a grill pan. Form the ground meat into eight patties. Season generously with salt and pepper and brush with olive oil. Grill over moderately high heat until well-browned on the bottom, 5 minutes. Flip the burgers, mound the brie on top and grill for 4 minutes longer, until the cheese is slightly melted and the burgers are medium-rare.", "Spread the lemon mayonnaise on the cut sides of the buns; set the burgers on the bottoms and top with the bacon and onions. Close the burgers and serve right away."],
               "http://cdn-image.foodandwine.com/sites/default/files/styles/550x550/public/original-201010-r-bacon-burger-brioche-HD.jpg?itok=O8r7yQ2Y",
               [
                 this.ingredientService.findIngredient(1), 
                 this.ingredientService.findIngredient(2),
                 this.ingredientService.findIngredient(3),
                 this.ingredientService.findIngredient(4),
                 this.ingredientService.findIngredient(5),
                 this.ingredientService.findIngredient(6),
                 this.ingredientService.findIngredient(7),
                 this.ingredientService.findIngredient(8),
                 this.ingredientService.findIngredient(9)]),
    new Recipe(2,
               "Turkey Meat Loaf",
               "Sweet Italian turkey sausage and freshly grated Parmigiano-Reggiano cheese lend an almost meatball-like flavor to this moist and marinara-topped turkey meat loaf.",    
               ["In a medium skillet, heat the olive oil until shimmering. Add the onion, garlic and a generous pinch each of salt and pepper and cook over moderate heat, stirring occasionally, until the onion is softened, about 7 minutes. Scrape the onion mixture into a large bowl. Using a rubber spatula, fold in the 1/4 cup of parsley and the basil. Let cool to room temperature, about 20 minutes.", "Preheat the oven to 375°. Add the ground turkey, turkey sausage, crushed crackers, cheese, mayonnaise, eggs, oregano, crushed red pepper flakes, 2 teaspoons of salt and 1/2 teaspoon of black pepper to the cooled onion mixture. Using your hands, mix gently until combined.", "Transfer the meat mixture to a parchment paper–lined baking sheet and pat it into a 5-by-11-inch loaf. Bake for about 40 minutes, until the meat loaf is browned and an instant-read thermometer inserted in the center registers 165°. Remove the meat loaf from the oven and spoon the marinara sauce on top.", "Turn on the broiler and broil the meat loaf until the marinara sauce is browned in spots, 3 to 4 minutes. Let the meat loaf stand for 15 minutes, garnish with chopped parsley and serve."],
               "http://cdn-image.foodandwine.com/sites/default/files/styles/551x551/public/turkey-meat-loaf-xl-recipe2016.jpg?itok=oBjKmEc7",
               [
                 this.ingredientService.findIngredient(10),
                 this.ingredientService.findIngredient(11),
                 this.ingredientService.findIngredient(12),
                 this.ingredientService.findIngredient(13),
                 this.ingredientService.findIngredient(14),
                 this.ingredientService.findIngredient(15),
                 this.ingredientService.findIngredient(16),
                 this.ingredientService.findIngredient(17),
                 this.ingredientService.findIngredient(18),
                 this.ingredientService.findIngredient(19),
                 this.ingredientService.findIngredient(20),
                 this.ingredientService.findIngredient(21),
                 this.ingredientService.findIngredient(22),
                 this.ingredientService.findIngredient(23),
                 this.ingredientService.findIngredient(24),
                 this.ingredientService.findIngredient(25),
               ]),
  ]
  private selected: Recipe;
  private incrementId = 3;

  constructor(private ingredientService: IngredientService) {
      this.selected = null;
   }

  addRecipe(name: string, descripton: string, instructions: string[], imageLink: string, ingredients: Ingredient[]){
    let newRecipe = new Recipe(this.incrementId++, name, descripton, instructions, imageLink, ingredients);
    this.recipes.push(newRecipe);
    return newRecipe;
  }

  removeRecipe(id: number){
    this.recipes.splice(this.recipes.indexOf(this.findRecipe(id.toString())), 1);
  }

  getRecipes(){
    return this.recipes.slice();
  }

  getSelected(){
    return this.selected;
  }

  findRecipe(id: string){
    return this.recipes.find((value) => {
      return value.id === +id;
    })
  }

  onSelected(recipe: Recipe){
    this.selected = recipe;
  }

}
