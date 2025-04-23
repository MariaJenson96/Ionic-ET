import { Component } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent } from '@ionic/angular/standalone';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, NgApexchartsModule],
})
export class HomePage {
  public chartOptions: any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Sales',
          data: [
            { x: 'Jan', y: 30 },
            { x: 'Feb', y: 40 },
            { x: 'Mar', y: 35 },
            { x: 'Apr', y: 50 },
            { x: 'May', y: 49 },
            { x: 'Jun', y: 60 },
            { x: 'Jul', y: 70 },
            { x: 'Aug', y: 91 },
            { x: 'Sep', y: 125 }
          ]
        }
      ],
      chart: {
        type: 'area',
        height: 350,
        zoom: { enabled: false }
      },
      dataLabels: { enabled: false },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      title: { text: 'Monthly Sales (Mountain Chart)', align: 'left' },
      grid: {
        row: { colors: ['#f3f3f3', 'transparent'], opacity: 0.5 }
      },
      xaxis: {
        type: 'category',
        categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep']
      },
      yaxis: { title: { text: 'Units Sold' } }
    };
  }
}
