import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { Recipe } from '../../interfaces/recipe'; 

@Component({
  selector: 'app-display-recipe',
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatChipsModule,
    MatExpansionModule
  ],
  templateUrl: './display-recipe.html',
  styleUrl: './display-recipe.scss'
})
export class DisplayRecipe {
constructor(
  public dialogRef: MatDialogRef<DisplayRecipe>,
  @Inject(MAT_DIALOG_DATA) public data: { recipe: Recipe }
) {}

get recipe(): Recipe {
  return this.data.recipe;
}

  onClose(): void {
    this.dialogRef.close();
  }
}

