import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { ToggleBtnModule } from '../toggle-button/toggle-button.module'

import { Hw03Component } from './hw03.component';
import { playGroundComponent } from './playground/playGround.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { CockpitComponent } from './cockpit/cockpit.component';

@NgModule({
  declarations:[
    playGroundComponent,
    Hw03Component,
    CockpitComponent,
    ServerElementComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ToggleBtnModule
  ],
  exports: [
    playGroundComponent,
    Hw03Component,
    CockpitComponent,
    ServerElementComponent
  ]
})

export class Hw03Module {}