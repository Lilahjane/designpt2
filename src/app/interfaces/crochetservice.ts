import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CrochetPattern } from './crochet';

@Injectable({
  providedIn: 'root'
})
export class CrochetService {
private http = inject(HttpClient);

  public getPattern(): Observable<CrochetPattern[]> {
    return this.http.get<CrochetPattern[]>('http://localhost:4000/patterns');
  }
}

