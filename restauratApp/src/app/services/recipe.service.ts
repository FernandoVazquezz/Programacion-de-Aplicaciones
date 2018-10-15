import { Recipe } from "../recipes/recipe.model";
import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe('A test recipe 1', 'This is a simply test ', 'https://cuponassets.cuponatic-latam.com/backendMx/uploads/imagenes_descuentos/40101/f9d7fa3c94bffa95f93b3ce7ac91d36b490a17a8.XL2.jpg', 
    [
        new Ingredient('bread', 2),
        new Ingredient('tomatoes', 3)
    ]),
        new Recipe('A test recipe 2', 'This is a simply test', 'https://cuponassets.cuponatic-latam.com/backendMx/uploads/imagenes_descuentos/40101/f9d7fa3c94bffa95f93b3ce7ac91d36b490a17a8.XL2.jpg',
        [
            new Ingredient('Beef', 3),
            new Ingredient('garlic', 1)
        ]),
        new Recipe('A test recipe 3', 'This is a simply test', 'https://cuponassets.cuponatic-latam.com/backendMx/uploads/imagenes_descuentos/40101/f9d7fa3c94bffa95f93b3ce7ac91d36b490a17a8.XL2.jpg',
        [
            new Ingredient('Sauce', 2),
        ])
    ];
      getRecipes(){
          return this.recipes.slice();
      }
}