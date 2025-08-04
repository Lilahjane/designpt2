import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-url-input',
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './url-input.html',
  styleUrl: './url-input.scss'
})
export class UrlInput {
 readonly dialogRef = inject(MatDialogRef<UrlInput>);
  readonly data = inject(MAT_DIALOG_DATA);
  
  url = '';

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.url) {
      this.dialogRef.close(this.url);
    }
  }
}
