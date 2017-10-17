import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-polarareachart',
  templateUrl: './polarareachart.component.html',
  styleUrls: ['./polarareachart.component.scss']
})
export class PolarareachartComponent {
  public polarAreaChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
  public polarAreaChartData:number[] = [300, 500, 100, 40, 120];
  public polarAreaLegend:boolean = true;
 
  public polarAreaChartType:string = 'polarArea';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
