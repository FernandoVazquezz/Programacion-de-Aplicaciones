import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";
import { BrowserStack } from "protractor/built/driverProviders";
import { Subject } from "rxjs";

export class IngredientsService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
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

      addIngredient(ingredient: Ingredient){
          this.ingredients.push(ingredient);
          this.ingredientsChanged.emit(this.ingredients.slice());
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
        this.ingredientsChanged.emit(this.ingredients.slice());
      }
} 