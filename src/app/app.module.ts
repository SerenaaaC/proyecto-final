import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';

// De PrimeNG

import {ButtonModule} from 'primeng/button';  //accordion and accordion tab
import {DialogModule} from 'primeng/dialog';
import {SpeedDialModule} from 'primeng/speeddial';
import {TableModule} from 'primeng/table'; // module de table documentation de PrimeNG

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    // PrimeNG
    ButtonModule,
    DialogModule,
    SpeedDialModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
