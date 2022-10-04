import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {

  public radius:number;


  constructor() { }

  
  getArea() :number{
    if(!isNaN(Number(this.radius)) ) {
      const area = 3.14*((Number(this.radius))*(Number(this.radius)));
      return area;
    }
    return 0;
  }
  getPerimeter():number {
    if(!isNaN(Number(this.radius)) ) {
      const perimeter = (Number(this.radius))*6.28;
      return perimeter;
    }
    return 0;
  }


  ngOnInit(): void {
  }

}
