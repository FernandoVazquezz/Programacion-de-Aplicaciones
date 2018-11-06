import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";
import { BrowserStack } from "protractor/built/driverProviders";
import { Subject } from "rxjs";

export class IngredientsService {
    //ingredientsChanged = new EventEmitter<Ingredient[]>();
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    private ingredients: Ingredient [] = [
        new Ingredient('Tomatoes', 5),
        new Ingredient('Sauce', 3),
        new Ingredient('Bread', 2)
      ];

      getIngredients(){
          return this.ingredients.slice();
      }

      getIngredient(index: number){
        return this.ingredients[index];
      }

      updateIngredient(index: number, ingredient: Ingredient){
        this.ingredients[index] = ingredient;
        this.ingredientsChanged.next(this.ingredients.slice());
      }
      deleteIngredient(index: number){
        this.ingredients.splice(index,1);
        this.ingredientsChanged.next(this.ingredients.slice());
      }

      addIngredient(ingredient: Ingredient){
          this.ingredients.push(ingredient);
          this.ingredientsChanged.next(this.ingredients.slice());
      }

     
      addIngredients(auxIngredients: Ingredient[]){
        for(const i of auxIngredients){
            var auxAmount = this.ingredients.find(ingredient => ingredient.name === i.name);
            if(auxAmount){
                auxAmount.amount += i.amount;
            }else{
                this.ingredients.push(i);
            }
        }
        this.ingredientsChanged.next(this.ingredients.slice());
      }
} 