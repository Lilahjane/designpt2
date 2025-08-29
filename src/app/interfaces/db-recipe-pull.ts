import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { map } from 'rxjs/operators';
import { DbRecipeModel } from "./db-recipe-model";

@Injectable({
  providedIn: 'root'
})
export class DbRecipePull {
  private apiUrl = 'http://localhost:4000/load-recipes';

  constructor(private http: HttpClient) { }
// If loading all recipes without ID
getAllSavedRecipes(): Observable<DbRecipeModel[]> {
  return this.http.get<DbRecipeModel[]>(this.apiUrl);
}

// If loading a specific recipe by ID
getRecipeById(id: string): Observable<DbRecipeModel> {
  return this.http.get<DbRecipeModel>(`${this.apiUrl}/${id}`);
}
}