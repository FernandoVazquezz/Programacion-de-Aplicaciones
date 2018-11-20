import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';

@Component({ 
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes:Recipe[];
  private sure:Subscription;
  constructor(private recipeService:RecipeService, private router:Router, private route: ActivatedRoute) {

   }
 
  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route});
   }
  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.recipeService.recipeChanged.subscribe((event)=>{
      this.recipes = this.recipeService.getRecipes();
    })
  }

}