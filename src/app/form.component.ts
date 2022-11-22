import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, MatGridListModule],
  template: `
      <mat-grid-list cols="2" rowHeight="200px" gutterSize="5px">
        <mat-grid-tile
            *ngFor="let tile of tiles"
            [colspan]="tile.cols"
            [rowspan]="tile.rows"
            [style.background]="tile.color">
            <mat-grid-tile-header>
              <h4>Angular Material</h4>
            </mat-grid-tile-header>
        </mat-grid-tile>
      </mat-grid-list>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent {
  tiles: Tile[] = [
    {text: 'One', cols: 2, rows: 2, color: 'lightblue'},
    {text: 'Two', cols: 2, rows: 1, color: 'lightgreen'},
    {text: 'Three', cols: 2, rows: 1, color: 'lightblue'},
    {text: 'Four', cols: 2, rows: 1, color: 'lightgreen'},
  ];  
}
