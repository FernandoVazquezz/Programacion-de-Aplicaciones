import { Recipe } from "../recipes/recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { IngredientsService } from "./ingredients.service";
import { Subject } from "rxjs";


@Injectable() 
export class RecipeService {
    recipeChanged = new Subject<Recipe[]>();
    startedEditing = new Subject<number>();

    private recipes: Recipe[] = [
        new Recipe('A test recipe 1', 'This is a simply test ', 'https://www.mundodomarketing.com.br/mundodomarketing//images/materias/Frango%20Picante%20imprensa.jpg', 
    [
        new Ingredient('Bread', 2),
        new Ingredient('Tomatoes', 3)
    ]),
        new Recipe('A test recipe 2', 'This is a simply test 2', 'https://www.mundodomarketing.com.br/mundodomarketing//images/materias/Frango%20Picante%20imprensa.jpg',
        [
            new Ingredient('Beef', 3),
            new Ingredient('Garlic', 1)
        ]),
        new Recipe('A test recipe 3', 'This is a simply test 3', 'https://www.mundodomarketing.com.br/mundodomarketing//images/materias/Frango%20Picante%20imprensa.jpg',
        [
            new Ingredient('Sauce', 2),
        ])
    ];

    
    constructor(private ingredientsService: IngredientsService){}

      getRecipes(){
          return this.recipes.slice();
      }

      getRecipe(index: number){
          return this.recipes[index];
      }
      
      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.ingredientsService.addIngredients(ingredients);
      }

      addRecipe(recipe:Recipe){
          this.recipes.push(recipe);
          this.recipeChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, recipe: Recipe){
        this.recipes[index] = recipe;
        this.recipeChanged.next(this.recipes.slice());
      }
}