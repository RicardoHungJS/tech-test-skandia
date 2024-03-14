import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IconsName } from 'src/models/icons/icons.model';

@Component({
  selector: 'app-icons',
  standalone: true,
  imports: [],
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.scss',
})
export class IconsComponent implements OnChanges {
  @Input() iconName: IconsName = 'noIcon';
  @Input() iconTheme!: string;

  mainColor: string = '#3f3f3f';
  secondaryColor: string = '#00C83C';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['iconTheme']) {
      this.setColors();
    }
  }

  private setColors(): void {
    switch (this.iconTheme) {
      case 'gray':
        this.mainColor = '#00C83C';
        this.secondaryColor = '#3f3f3f';
        break;

      case 'white':
        this.mainColor = '#3f3f3f';
        this.secondaryColor = '#fff';
        break;

      default:
        this.mainColor = '#3f3f3f';
        this.secondaryColor = '#00C83C';
        break;
    }
  }
}
