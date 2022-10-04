import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-perimeter-and-area-form',
  templateUrl: './perimeter-and-area-form.component.html',
  styleUrls: ['./perimeter-and-area-form.component.css']
})
export class PerimeterAndAreaFormComponent implements OnInit {

  // console = console;
  public data:any;
  public form : any;
  public result!: number;
  public dataConverted! : number;
  public convertToUnit! : string;
  public selectedCalcul : string ;
  public selectedFigureName : string ;


  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    
    this.getDatas();
    this.result=0;
    this.dataConverted=0;
    this.selectedFigureName="";
    this.selectedCalcul = "" ;
    this.convertToUnit = "" ;

  }

  selectedFigureHandler(event : any){
    this.selectedFigureName = event.target.value;
  }

  selectedCalculHandler(event : any){
    this.selectedCalcul = event.target.value
  }

  selectedConvertToUnitHandler(event : any){
    this.convertToUnit = event.target.value
  }

  // rectangle
  calculatePerimeterOfRectangle(width : number, length : number): number{

    if((width>0 && length>0) && width > length){
      return (2*(width + length))
    }

    return 0
  }
  calculateAreaOfRectangle(width : number, length : number): number{

    if((width>0 && length>0) && width > length){
      return (width * length)
    }
    return 0
  }

  //square
  calculatePerimeterOfSquare(side : number) : number{
    if(side > 0){
      return (side*4)
    }
    return 0
  }
  calculateAreaOfSquare(side : number) : number {
    if(side > 0){
      return (Math.pow(side,2))
    }
    return 0
  }

  //circle
  calculatePerimeterOfCircle(radius : number) : number{
    if (radius>0) {
      return (2*Math.PI*radius)
    }  
    return 0
  }

  calculateAreaOfCircle(radius : number) : number{
    if (radius>0) {
      return (Math.PI*Math.pow(radius,2))
    }  
    return 0
  }

  //triangle
  calculatePerimeterOfTriangle(side1 : number, side2 : number, side3 : number) : number{
    if(side1>0 && side2>0 && side3>0){
      return (side1 + side2 + side3)
    }
    return 0
  }
  calculateAreaOfTriangle(base: number,height: number) : number{
    if(base>0 && height>0)
    {
      return (base*height/2)
    }
    return 0
  }

  onSubmit(form : any){

    switch(form.figureName){
      case 'rectangle' :
        this.selectedCalcul == "perimeter" ? this.result = this.calculatePerimeterOfRectangle(form.width, form.length) : this.result = this.calculateAreaOfRectangle(form.width, form.length)
        break
      case 'square' :
        this.selectedCalcul == "perimeter" ? this.result = this.calculatePerimeterOfSquare(form.side): this.result = this.calculateAreaOfSquare(form.side)
        break
      case 'circle' :
        this.selectedCalcul == "perimeter" ? this.result = this.calculatePerimeterOfCircle(form.radius): this.result = this.calculateAreaOfCircle(form.radius)
        break
      case 'triangle' :
        this.selectedCalcul == "perimeter" ? this.result = this.calculatePerimeterOfTriangle(form.side1, form.side2, form.side3): this.result = this.calculateAreaOfTriangle(form.side1, form.side2)
        break
    }

    // return this.result
    console.log(this.result)
    console.log(form)
  }

  convert(unit : string){
    if(unit == "km"){
      this.dataConverted = this.result*Math.pow(10,-3);
    }else if(unit == "dm"){
      this.dataConverted = this.result*Math.pow(10,1);
    }else if(unit == "cm"){
      this.dataConverted = this.result*Math.pow(10,2);
    }else if(unit=="m")
    {
      this.dataConverted = this.result*Math.pow(10,0);
    }
    if(unit == "km²"){
      this.dataConverted = this.result*Math.pow(10,-6);
    }else if(unit == "dm²"){
      this.dataConverted = this.result*Math.pow(10,2);
    }else if(unit == "cm²"){
      this.dataConverted = this.result*Math.pow(10,4);
    }else if(unit=="m²"){
      this.dataConverted = this.result*Math.pow(10,0);
    }

    // return this.result
    console.log(unit)
    console.log(this.convertToUnit)
    console.log(this.dataConverted)
  }


  getDatas(){
    this.httpClient.get<any>('http://localhost:8000/').subscribe(
      response => {
        console.log(response);
        this.data = response;
      }
    );
  }
}
