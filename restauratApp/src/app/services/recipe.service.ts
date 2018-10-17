import { Recipe } from "../recipes/recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { IngredientsService } from "./ingredients.service";


@Injectable() 
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe('A test recipe 1', 'This is a simply test ', 'http://sevilla.abc.es/contenidopromocionado/wp-content/uploads/sites/2/2017/09/1996x1206-hamburguesas.jpg', 
    [
        new Ingredient('Bread', 2),
        new Ingredient('Tomatoes', 3)
    ]),
        new Recipe('A test recipe 2', 'This is a simply test 2', 'http://sevilla.abc.es/contenidopromocionado/wp-content/uploads/sites/2/2017/09/1996x1206-hamburguesas.jpg',
        [
            new Ingredient('Beef', 3),
            new Ingredient('Garlic', 1)
        ]),
        new Recipe('A test recipe 3', 'This is a simply test 3', 'http://sevilla.abc.es/contenidopromocionado/wp-content/uploads/sites/2/2017/09/1996x1206-hamburguesas.jpg',
        [
            new Ingredient('Sauce', 2),
        ])
    ];

    
    constructor(private ingredientsService: IngredientsService){}

      getRecipes(){
          return this.recipes.slice();
      }

      
      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.ingredientsService.addIngredients(ingredients);
      }
}