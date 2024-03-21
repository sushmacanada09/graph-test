import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var Plotly: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  @ViewChild('plotlyChart', { static: true }) plotlyChart!: ElementRef;

  ngOnInit(): void {
    this.plot();
  }

  plot() {
    const element = this.plotlyChart.nativeElement;

    var trace1 = {
      x: [1, 2, 3, 4],
      y: [10, 15, 13, 17],
      mode: 'markers',
      marker: {
        color: 'rgb(219, 64, 82)',
        size: 12
      }
    };
    
    var trace2 = {
      x: [2, 3, 4, 5],
      y: [16, 5, 11, 9],
      mode: 'lines',
      line: {
        color: 'rgb(55, 128, 191)',
        width: 3
      }
    };
    
    var trace3 = {
      x: [1, 2, 3, 4],
      y: [12, 9, 15, 12],
      mode: 'lines+markers',
      marker: {
        color: 'rgb(128, 0, 128)',
        size: 8
      },
      line: {
        color: 'rgb(128, 0, 128)',
        width: 1
      }
    };
    
    var data = [trace1, trace2, trace3];
    
    var layout = {
      title: 'Line and Scatter Styling'
    };

    Plotly.newPlot(element, data, layout);
  }
}
