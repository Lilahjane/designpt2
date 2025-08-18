import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { DbRecipePull } from '../../interfaces/db-recipe-pull';
import { RecipeInfo } from '../../interfaces/recipe-info';
import { Nutrient } from '../../interfaces/nutrient';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-recipe-details',
  imports: [
    RouterModule,
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatExpansionModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule

],
  templateUrl: './recipe-details.html',
  styleUrl: './recipe-details.scss'
})
export class RecipeDetails {
  private routerParams = inject(ActivatedRoute);
  private router = inject(Router);
  private service = inject(DbRecipePull);
  public recipe!: RecipeInfo;


  ngOnInit(): void {
    this.getRouteParams();
  }
    getStars(rating: string): string[] {
    const numericRating = parseFloat(rating);
    const stars = [];
    const fullStars = Math.floor(numericRating);
    const hasHalfStar = numericRating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push('star');
      } else if (i === fullStars && hasHalfStar) {
        stars.push('star_half');
      } else {
        stars.push('star_border');
      }
    }

    return stars;
  }

  getNutrientLabel(id: string): string {
    const labels: {[key: string]: string} = {
      'calories': 'Calories',
      'fat_content': 'Fat',
      'fiber_content': 'Fiber',
      'sugar_content': 'Sugar',
      'sodium_content': 'Sodium',
      'protein_content': 'Protein',
      'cholesterol_content': 'Cholesterol',
      'carbohydrate_content': 'Carbohydrates',
      'saturated_fat_content': 'Saturated Fat',
      'unsaturated_fat_content': 'Unsaturated Fat'
    };
    return labels[id] || id;
  }

  getNutrientValue(nutrient: Nutrient): string {
    // Get the value for the nutrient
    const value = nutrient[`${nutrient.id}` as keyof Nutrient];
    return value ? value.toString() : 'N/A';
  }

  printRecipe(): void {
    window.print();
  }

  private getRouteParams() {
    this.routerParams.params.subscribe((data) => {
      this.getRecipeById(+data['id']);
    });
  }

  private getRecipeById(id: number) {
    this.service.getAllSavedRecipes().subscribe((recipes) => {
      const allRecipes = recipes.map((item, index) => {
        return { ...item, id: index + 1 };
      });
      // this.recipe = allRecipes.find((x) => x.id == id) || ({} as Recipe);
      // this.dataSource = this.recipe.Ingredients;
    });
  }

  public goBack() {
    this.router.navigateByUrl('/');
  }

  public goToSite() {
    window.open(this.recipe.url, '_blank');
  }
}
