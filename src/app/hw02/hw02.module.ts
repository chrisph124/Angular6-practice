import { NgModule } from "@angular/core";
import { ToggleBtnModule } from '../toggle-button/toggle-button.module'
import { Hw02Component } from "./hw02.component";
import { playGroundComponent } from "./playGround/playGround.component";
import { DataBidingComponent } from "./data-biding/data-biding.component";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [
    Hw02Component,
    playGroundComponent,
    DataBidingComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ToggleBtnModule
  ],
  exports: [
    Hw02Component,
    playGroundComponent,
    DataBidingComponent
  ]
})

export class Hw02Module {}