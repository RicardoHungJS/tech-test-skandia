import { Component } from '@angular/core';
import { IconsComponent } from '../icons/icons.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IconsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
