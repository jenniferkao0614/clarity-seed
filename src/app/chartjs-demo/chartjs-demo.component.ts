import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chartjs-demo',
  templateUrl: './chartjs-demo.component.html',
  styleUrls: ['./chartjs-demo.component.scss']
})
export class ChartjsDemoComponent {


  chartOptions = {
    responsive: true
  };

  chartData = [
    { data: [330, 600, 260, 700], label: 'Account A' },
    { data: [120, 455, 100, 340], label: 'Account B' },
    { data: [45, 67, 800, 500], label: 'Account C' }
  ];

  chartLabels = ['January', 'February', 'Mars', 'April'];

  onChartClick(event) {
    console.log(event);
  }

}
