import { Component, OnInit, inject } from '@angular/core';
import { IconsComponent } from '../components/icons/icons.component';
import { BringProductsService } from 'src/services/bring-products.service';
import { ListCard, Products } from 'src/models/products/products.model';
import { CarouselModule } from 'primeng/carousel';
import { InfoCardComponent } from '../components/info-card/info-card.component';

@Component({
  selector: 'app-financial-plan',
  standalone: true,
  imports: [IconsComponent, CarouselModule, InfoCardComponent],
  providers: [BringProductsService],
  templateUrl: './financial-plan.component.html',
  styleUrl: './financial-plan.component.scss',
})
export class FinancialPlanComponent implements OnInit {
  productsService = inject(BringProductsService);
  cardsData: ListCard[] = [];

  responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '991px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  financialData = [
    {
      labelText: 'En esta fecha:',
      data: 'Diciembre/2022',
      color: '#63AABC',
      starIcon: false,
    },
    {
      labelText: 'Lograrás:',
      data: '$6.000.000',
      color: '#FECD72',
      starIcon: false,
    },
    {
      labelText: 'Ya cuentas con:',
      data: '$0',
      color: '#95DBB7',
      starIcon: true,
    },
  ];

  ngOnInit(): void {
    this.bringProducts();
  }

  private bringProducts(): void {
    this.productsService.bringProducts().subscribe({
      next: (res: Products) => {
        this.cardsData = res.listCard;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
