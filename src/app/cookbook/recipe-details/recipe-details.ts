import { MatExpansionModule } from '@angular/material/expansion';

import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { DbRecipeModel } from '../../interfaces/db-recipe-model';
import { DbRecipePull } from '../../interfaces/db-recipe-pull';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  imports: [
    MatButtonModule,
    MatListModule,
    MatIconModule,
MatCardModule,
MatChipsModule,
CommonModule,
MatExpansionModule
  ],
  templateUrl: './recipe-details.html',
  styleUrl: './recipe-details.scss'
})
export class RecipeDetails implements OnInit {
 public recipe!: DbRecipeModel;
 private router = inject(Router);
private routerParams = inject(ActivatedRoute);
private service = inject(DbRecipePull);

  ngOnInit(): void {
   this.getRouteParams();
  }

private getRouteParams() {
  this.routerParams.params.subscribe((params) => {
    const id = params['id']; // cuid string
    if (id) {
      this.getRecipeById(id);
    }
  });
}

private getRecipeById(id: string) {
  this.service.getRecipeById(id).subscribe({
    next: (recipe) => this.recipe = recipe,
    error: (err) => console.error('Error loading recipe:', err)
  });
}

}
