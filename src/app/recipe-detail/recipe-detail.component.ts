import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../shared/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  
  @Input() selectedRecipe: Recipe | null = null;

  constructor() {}

  ngOnInit(): void {}

  onAddIngredient(ingredientName: string): void {
    this.updateIngredientsList(ingredientName, 'add');
  }

  onDeleteIngredient(ingredientName: string): void {
    this.updateIngredientsList(ingredientName, 'delete');
  }

  onClearIngredients(): void {
    if (this.selectedRecipe) {
      this.selectedRecipe.ingredients = [];
    }
  }

  private updateIngredientsList(ingredientName: string, action: 'add' | 'delete'): void {
    if (!this.selectedRecipe) return;
    
    if (action === 'add') {
      this.selectedRecipe.ingredients.push(ingredientName);
    } else if (action === 'delete') {
      this.selectedRecipe.ingredients = this.selectedRecipe.ingredients.filter(
        (ingredient) => ingredient !== ingredientName
      );
    }
  }
}
