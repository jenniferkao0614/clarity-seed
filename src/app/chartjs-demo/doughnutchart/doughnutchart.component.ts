import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doughnutchart',
  templateUrl: './doughnutchart.component.html',
  styleUrls: ['./doughnutchart.component.scss']
})
export class DoughnutchartComponent {
  public doughnutChartData:number[]=[300,450,100];
  public doughnutChartType:string='doughnut';
  public doughnutChartLabels:string[]=['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  
  

}
