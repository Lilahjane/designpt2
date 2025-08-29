import { Component, OnInit, inject } from '@angular/core';
import { CrochetPattern } from '../../interfaces/crochet';
import { CrochetService } from '../../interfaces/crochetservice';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-crochet-pattern-view',
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './crochet-pattern-view.html',
  styleUrl: './crochet-pattern-view.scss'
})
export class CrochetPatternView implements OnInit {
  pattern?: CrochetPattern;

  constructor(
    private route: ActivatedRoute,
    private crochetService: CrochetService,
    private location: Location
  ) {}

ngOnInit() {
  const title = this.route.snapshot.paramMap.get('title');
  this.crochetService.getPattern().subscribe(patterns => {
    this.pattern = patterns.find(p => p.title === title);
  });
}

goBack(): void {
  this.location.back();
}
}