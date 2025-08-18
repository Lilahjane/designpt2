// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs'; 
// import { map } from 'rxjs/operators';
// import { RecipeInfo,  } from './recipe-info';

// @Injectable({
//   providedIn: 'root'
// })
// export class DbRecipePull {
//   private apiUrl = 'http://localhost:4000/api/recipes';

//   constructor(private http: HttpClient) { }

//   getAllSavedRecipes(id: string): Observable<RecipeInfo> {
//     return this.http.get<RecipeInfo>(`${this.apiUrl}/${id}`).pipe(
//       map((apiRecipe: RecipeInfo) => ({

//       }))
//     );
//   }
// }