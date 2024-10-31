import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainModule } from './main.module';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forChild(routes), MainModule],
  exports: [RouterModule]
})
export class MainRoutingModule { }
