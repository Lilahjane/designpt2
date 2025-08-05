import { Recipe } from './recipe';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class RecipeSaver {
  private readonly API_URL = 'http://localhost:3000/recipes';

  constructor(private http: HttpClient) {}

  saveRecipe(recipe: Recipe) {
    return this.http.post<{ id: number }>(this.API_URL, recipe);
  }
}
