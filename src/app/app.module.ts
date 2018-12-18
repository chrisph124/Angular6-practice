import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hw01Module } from './hw01/hw01.module';
import { Hw02Module } from './hw02/hw02.module';
import { Hw03Module } from './hw03/hw03.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    Hw01Module,
    Hw02Module,
    Hw03Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
