import { Component, OnInit, inject } from '@angular/core';
 import { DbRecipePull } from '../../interfaces/db-recipe-pull';
import { DbRecipeModel } from '../../interfaces/db-recipe-model';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {PageEvent, MatPaginatorModule} from '@angular/material/paginator';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Filters } from '../filters/filters';

@Component({
  selector: 'app-cookbook',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    CommonModule,
    Filters
  ],
  templateUrl: './cookbook.html',
  styleUrl: './cookbook.scss'
})
export class Cookbook implements OnInit {

  savedrecipes: DbRecipeModel[] = [];
  visibleRecipes: DbRecipeModel[] = [];
  selectedRecipe?: DbRecipeModel;

  recipesPerPage: number = 12;
  totalPages!: number;
  activePage: number = 1;

  private router = inject(Router);

  constructor(private recipeService: DbRecipePull) { }

  ngOnInit(): void {
    this.loadRecipes();
  }

  loadRecipes(): void {
    this.recipeService.getAllSavedRecipes().subscribe({
      next: (data) => {
        this.initPagination(data);
        this.setRecipes(data);
        this.setPagination();
      },
      error: (err) => console.error('Error loading recipes:', err)
    });
  }

  private initPagination(recipes: DbRecipeModel[]) {
    this.totalPages = Math.ceil(recipes.length / this.recipesPerPage);
  }

 private setRecipes(recipes: DbRecipeModel[]) {
  this.savedrecipes = recipes; // ✅ keep real recipe_id (cmek3v00r0000vi5czcna6f1n)
}


  private setPagination() {
    const startIndex = (this.activePage - 1) * this.recipesPerPage;
    const endIndex = startIndex + this.recipesPerPage;
    this.visibleRecipes = this.savedrecipes.slice(startIndex, endIndex);
  }

  handlePageChange(event: any) {
    this.activePage = event.pageIndex + 1;
    this.setPagination();
  }

  viewRecipe(recipe: DbRecipeModel) {
    this.router.navigateByUrl(`recipe-details/${recipe.recipe_id}`);
  }

  loadRecipeDetails(id: string): void {
    this.recipeService.getRecipeById(id).subscribe({
      next: (data) => this.selectedRecipe = data,
      error: (err) => console.error('Error loading recipe details:', err)
    });
  }
}
