import { Component, inject } from '@angular/core';
import { IconsComponent } from '../icons/icons.component';
import { IconsName } from 'src/models/icons/icons.model';
import { Router } from '@angular/router';

interface SidebarOption {
  name: string;
  route: string;
  iconName: IconsName;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [IconsComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  router = inject(Router);

  hoverId!: number | null;

  sideBarOptions: SidebarOption[] = [
    {
      name: 'Inicio',
      route: '',
      iconName: 'home',
    },
    {
      name: 'Contratos',
      route: '',
      iconName: 'paper',
    },
    {
      name: 'Contratos',
      route: '',
      iconName: 'paper',
    },
    {
      name: 'Contratos',
      route: '',
      iconName: 'paper',
    },
    {
      name: 'Contratos',
      route: '',
      iconName: 'paper',
    },
  ];

  public hoverColorChange(id: number | null): void {
    this.hoverId = id;
  }

  public redirectTo(route: string): void {
    this.router.navigate([route]);
  }
}
