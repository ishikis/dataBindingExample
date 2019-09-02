import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-detail',
  template: `
  <h4>Lower-Upper-Title Case Pipe</h4>
  <p>{{title}}</p>
  <p>{{title | uppercase}}</p>
  <p>{{title | lowercase}}</p>
  <p>{{title | titlecase}}</p>
 
  <h4> Date Pipe</h4>
  <p>{{ today }}</p>
  <p>{{ today | date }}</p>
  <p>{{ today | date :'fullDate' }}</p>
  <p>{{ today | date :'medium'}}</p>
  <p>{{ today | date :'hh:mm:ss'}}</p>
   
  <h4> Decimal Pipe</h4>
  <p>{{ student }}</p>
  <p>{{ student | number }}</p>
  <p>{{ price | number :'1.2-2' }}</p>


  <h4> Currency Pipe</h4>
  <p>{{ price | currency }}</p>
  <p>{{ price | currency :'EUR'}}</p>
 
  <h4> percent Pipe</h4>
  <p>{{ completed | percent   }}</p>`
})
export class PipeDetailComponent implements OnInit {

  constructor() { }

  today: number = Date.now();
  title: string = "ANGULAR kursu"
  student: number = 121354;
  price: number = 135.4324;
  completed: number = 0.35;
  ngOnInit() {
  }

}
