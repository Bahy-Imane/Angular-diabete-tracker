import {GlucoseReading} from "../model/glucose-reading";
import { Component, AfterViewInit, Input } from '@angular/core';
import { Chart, LinearScale, registerables } from 'chart.js';


@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent implements AfterViewInit {
  @Input() glucoses!: GlucoseReading[];

  constructor() {
    Chart.register(...registerables);
    Chart.register(LinearScale);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    console.log('glucoses:', this.glucoses);
    this.updateChart();
  }

  private updateChart() {
    console.log('Updating chart...');
    console.log('glucoses:', this.glucoses);

    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.glucoses.map(g => g.dateAndTime.toISOString()),
        datasets: [{
          label: 'glucose levels',
          backgroundColor: 'rgb(15,176,210)',
          borderColor: 'rgb(15,176,210)',
          data: this.glucoses.map(g => g.level),
        }]
      },
      options: {
        scales: {
          x: {
            type: 'linear',
            position: 'bottom'
          }
        }
      }
    });
  }
}


