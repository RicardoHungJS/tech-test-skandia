import { Component, OnInit, inject } from '@angular/core';
import { ActivationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SidebarComponent],
})
export class AppComponent implements OnInit {
  private router = inject(Router);

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event: any) => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        map((event: ActivationEnd) => event.snapshot.data)
      )
      .subscribe({
        next: (breadcrumb: any) => {
          document.title = `Skandia - ${breadcrumb['label']}`;
        },
      });
  }
}
