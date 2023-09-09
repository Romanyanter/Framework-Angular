import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  Urlphotoone:string = 'assets/image/poert1.png';
  Urlphototwo:string = 'assets/image/port2.png';
  Urlphotothree:string= 'assets/image/port3.png';
  constructor(){}
}

