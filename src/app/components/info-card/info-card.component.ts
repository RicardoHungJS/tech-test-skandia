import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IconsComponent } from '../icons/icons.component';

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [CommonModule, IconsComponent],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.scss',
})
export class InfoCardComponent implements OnChanges {
  @Input() cardData: any;
  colorAleatorio!: string;

  bottomDetailsColors: string[] = [
    '#A4D071',
    '#FECD72',
    '#FF9460',
    '#95DBB7',
    '#63AABC',
  ];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['cardData']) {
      const indice = Math.floor(
        Math.random() * this.bottomDetailsColors.length
      );
      this.colorAleatorio = this.bottomDetailsColors[indice];
    }
  }
}
