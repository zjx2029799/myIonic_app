import {AlertController } from 'ionic-angular';
import {NavController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'test',
  templateUrl: 'test.html',
})

export class TestPage{
  chartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
 
  chartLabels: string[] = ['Test 1', 'Test 2', 'Test 3', 'Test 4'];
  chartType: string = 'bar';
  chartLegend: boolean = true;
 
  chartData: any[] = [
    { data: [75, 80, 45, 100], label: 'Student A' },
    { data: [80, 55, 75, 95], label: 'Student B' }
  ];
 
  constructor(public navCtrl: NavController) {
 
  }
}