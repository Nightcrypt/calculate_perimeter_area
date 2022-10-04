import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-triangle',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.css']
})
export class TriangleComponent implements OnInit {

  public base : number;
  public height : number;

  constructor() { }

  getArea():number{
    if(!isNaN(Number(this.base))||(Number(this.height)) ) {
      const area = ((Number(this.base))*(Number(this.height)))/2;
      return area;
    }
    return 0;
  }

  getPerimeter():number {
    if(!isNaN(Number(this.base)) ) {
      const perimeter = (Number(this.base))*3;
      return perimeter;
    }
    return 0;
  }
  ngOnInit(): void {
  }

}
