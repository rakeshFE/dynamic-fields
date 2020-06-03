import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MomentModule } from 'angular2-moment';
import { HttpClientModule } from '@angular/common/http';
import { DialogKeepAliveComponent } from './commons/components/dialog-keep-alive/dialog-keep-alive.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DialogKeepAliveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule,
    ReactiveFormsModule, FormsModule,
    NgIdleKeepaliveModule.forRoot(),
    MomentModule,BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
