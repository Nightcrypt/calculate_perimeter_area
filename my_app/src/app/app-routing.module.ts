import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CircleComponent} from './circle/circle.component';
import {RectangleComponent} from './rectangle/rectangle.component';
import {TriangleComponent} from './triangle/triangle.component';

const routes: Routes = [
  {path: 'rectangle', component : RectangleComponent},
  {path: 'circle', component : CircleComponent},
  {path: 'triangle', component : TriangleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
