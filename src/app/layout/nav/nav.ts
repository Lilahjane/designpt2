import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { UrlInput } from '../../addrecipe/url-input/url-input';
import { DisplayRecipe } from '../../addrecipe/display-recipe/display-recipe';
import { MatDialog } from '@angular/material/dialog';
import { Recipegetter } from '../../interfaces/recipegetter';

@Component({
  selector: 'app-nav',
  imports: [
    RouterOutlet,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    RouterLink

  ],
  templateUrl: './nav.html',
  styleUrl: './nav.scss'
})
export class Nav {
  showFiller = false;
  private readonly dialog = inject(MatDialog);
  private readonly recipeGetter = inject(Recipegetter);

  openUrlInputDialog(): void {
    const dialogRef = this.dialog.open(UrlInput, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(url => {
      if (url) {
        this.scrapeAndDisplayRecipe(url);
      }
    });
  }

  private scrapeAndDisplayRecipe(url: string): void {
    this.recipeGetter.getRecipe(url).subscribe({
      next: (recipe) => {
        this.dialog.open(DisplayRecipe, {
          width: '800px',
          data: { recipe }
        });
      },
      error: (err) => {
        console.error('Error scraping recipe:', err);
        // You might want to show an error dialog here
      }
    });
  }
}
