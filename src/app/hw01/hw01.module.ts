import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { ToggleBtnModule } from "../toggle-button/toggle-button.module";
import { ServersComponent } from "./servers/servers.component";
import { playGroundComponent } from "./playground/playGround.component";
import { ServerComponent } from "./servers/server/server.component";
import { Hw01Component } from "./hw01.component";

@NgModule({
  declarations: [
    Hw01Component,
    ServersComponent,
    ServerComponent,
    playGroundComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ToggleBtnModule
  ],
  exports: [
    Hw01Component,
    ServersComponent,
    ServerComponent,
    playGroundComponent
  ]
})

export class Hw01Module {}