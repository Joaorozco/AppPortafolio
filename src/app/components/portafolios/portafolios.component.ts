import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-portafolios',
  templateUrl: './portafolios.component.html',
  styleUrls: ['./portafolios.component.css']
})
export class PortafoliosComponent implements OnInit {
  portfolio: any
  constructor(
    private datos: PortfolioService
  ) { }

  ngOnInit(): void {
    this.datos.obtenerDatosPortfolio().subscribe(data => {
      console.log(data);
      this.portfolio = data
    })
  }


}
