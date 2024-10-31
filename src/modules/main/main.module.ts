import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainscreenComponent } from './mainscreen/mainscreen.component';
import { HttpClientModule } from '@angular/common/http';

import { TableModule } from 'primeng/table';
import { LoadingComponent } from './loading/loading.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';



@NgModule({
  declarations: [
    MainscreenComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TableModule,
    ProgressSpinnerModule,
    ToastModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    FormsModule,
    CalendarModule,
    DropdownModule
      
    
  ],
  exports: [
    MainscreenComponent
  ]
})
export class MainModule { }
