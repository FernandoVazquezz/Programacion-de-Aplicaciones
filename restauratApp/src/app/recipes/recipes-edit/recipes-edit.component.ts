import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators, NgForm } from '@angular/forms';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrls: ['./recipes-edit.component.css']
})
export class RecipesEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;
  @ViewChild('f')slForm: NgForm;
  constructor(private route: ActivatedRoute,private recipeService: RecipeService) { 

  }

  ngOnInit() {
    this.route.params.subscribe((params: Params)=>{
      this.id = +params['id'];
      this.editMode = params['id'] !=null;
      this.initForm();
    });
  }

  private initForm(){
    let recipeName ='';
    let recipeImagePath = '';
    let recipeDescription ='';
    const ingredients = new FormArray([]);

    if(this.editMode){
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName=recipe.name;
      recipeImagePath=recipe.imagePath;
      recipeDescription=recipe.description;
      if(recipe['ingredients']){
        for (const ingredient of recipe.ingredients){
          ingredients.push(
            new FormGroup({
              'name' : new FormControl(ingredient.name,Validators.required),
              'amount' : new FormControl(ingredient.amount,
                [ Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
                ])
            })
          );
        }
      }

      this.recipeForm = new FormGroup({
        'name' : new FormControl(recipeName,Validators.required),
        'imagePath' : new FormControl(recipeImagePath,Validators.required),
        'description' : new FormControl(recipeDescription,Validators.required),
        'ingredients' : ingredients
      });

    }
  }
  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null,Validators.required),
        'amount': new FormControl(null,[
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    )
  }

  onSubmit(){
    const recipe = this.recipeForm.value;
    const newRecipe = new Recipe(recipe.name, recipe.description, recipe.imagePath, recipe.ingredients);
    console.log(this.recipeForm);
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, newRecipe);
    }else{
      this.recipeService.addRecipe(newRecipe);
    }
    this.clear();
  }
  
  clear(){
    this.slForm.reset();
    this.editMode = false;
  }

}

