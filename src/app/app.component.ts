import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';

@Component({
  selector: 'app-root',
  template: `
    <mat-card class="example-card">
      <mat-card-header>
        <div mat-card-avatar class="example-header-image"></div>
        <mat-card-title>Typed form example</mat-card-title>
        <mat-card-subtitle>Example how to used Angular typed forms</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <app-form></app-form>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button>LIKE</button>
        <button mat-button>SHARE</button>
      </mat-card-actions>            
    </mat-card>
  `,
  styles: [`
    .example-card {
      max-width: 30rem;
      margin: auto;
    }

    .example-header-image {
      background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');
      background-size: cover;
    }  
  `],
  imports: [CommonModule, MatCardModule, MatButtonModule, FormComponent],
  standalone: true,
})
export class AppComponent { }
