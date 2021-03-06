import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { IngredientsService } from '../../services/ingredients.service';
import { Ingredient } from '../../shared/ingredient.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit , OnDestroy {

  //@ViewChild('nameInput') nameInputRef: ElementRef;
  //@ViewChild('amountInput') amountInputRef: ElementRef;
  private subscription: Subscription;
  editedItem: Ingredient;
  @ViewChild('f')slForm: NgForm;
  editMode = false;
  indexExitedItem: number;
  constructor(private ingredientsService: IngredientsService) { }

  ngOnInit() {
    this.subscription = this.ingredientsService.startedEditing.subscribe((index: number)=>{
      this.indexExitedItem = index;
      this.editedItem = this.ingredientsService.getIngredient(index);
      this.editMode = true;
      this.slForm.setValue({
        name:this.editedItem.name,
        amount: this.editedItem.amount
      })
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onAddItem(form: NgForm){
    //const name = this.nameInputRef.nativeElement.value;
    //const amount = this.amountInputRef.nativeElement.value;
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode){
      this.ingredientsService.updateIngredient(this.indexExitedItem,newIngredient)
    }else{
      this.ingredientsService.addIngredient(newIngredient);
    }
    this.clear();
  }

  deleteItem(){
    this.ingredientsService.deleteIngredient(this.indexExitedItem);
    this.clear();
  }

  clear(){
    this.slForm.reset();
    this.editMode = false;
  }
} 