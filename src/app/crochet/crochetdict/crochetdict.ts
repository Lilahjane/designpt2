import { Component, OnInit, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {PageEvent, MatPaginatorModule} from '@angular/material/paginator';
import { Router } from '@angular/router';
import { CrochetPattern } from '../../interfaces/crochet';
import { CrochetService } from '../../interfaces/crochetservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crochetdict',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    CommonModule
  ],
  templateUrl: './crochetdict.html',
  styleUrl: './crochetdict.scss'
})
export class Crochetdict implements OnInit {
  patterns: CrochetPattern[] = [];
  visiblePatterns: CrochetPattern[] = [];

  pageSize = 12;
  currentPage = 0;

  constructor(private crochetService: CrochetService, private router: Router) {}

ngOnInit() {
  this.crochetService.getPattern().subscribe(patterns => {
    this.patterns = patterns; // already array, no wrapping needed
    this.updateVisible();
  });
}

  updateVisible() {
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    this.visiblePatterns = this.patterns.slice(start, end);
  }

  handlePageChange(event: any) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updateVisible();
  }

  viewPattern(pattern: CrochetPattern) {
    this.router.navigate(['/crochet', pattern.title]);
  }
}
