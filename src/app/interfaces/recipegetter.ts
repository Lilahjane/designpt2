import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root'
})
export class Recipegetter {
   private baseUrl = 'http://127.0.0.1:5000/scrape-recipe';

  constructor(private http: HttpClient) {}

  getRecipe(url: string): Observable<Recipe> {
    return this.http.post<Recipe>(this.baseUrl, { url });
  }
}
