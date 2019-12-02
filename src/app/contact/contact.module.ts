import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { DetailsComponent } from './details/details.component';
export const DetailsRoutes: Route[] =[
  {
  path: '',
  component: DetailsComponent
  }
  ];

@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(DetailsRoutes)
  ]
})
export class ContactModule { }
