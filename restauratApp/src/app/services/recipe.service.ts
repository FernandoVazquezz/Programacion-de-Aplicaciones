import { Recipe } from "../recipes/recipe.model";

export class RecipeService{
recipes:Recipe[]= [
    new Recipe('A test recipe','This is a simply test','https://cocina-casera.com/wp-content/uploads/2016/11/hamburguesa-queso-receta.jpg'),
    new Recipe('Recipe 1','Recipe uno','https://cocina-casera.com/wp-content/uploads/2016/11/hamburguesa-queso-receta.jpg'),
    new Recipe('Recipe 2','Recipe dos','https://cocina-casera.com/wp-content/uploads/2016/11/hamburguesa-queso-receta.jpg')
    
  ]
  
  getRecipes(){
      return this.recipes.slice();
  }

}