import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainModule } from '../modules/main/main.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
        positionClass: 'toast-top-right', // Define a posição da notificação
        timeOut: 4000, // Tempo que a notificação permanece visível (em ms)
    }),
],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
