import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['../../app.component.css'],
})
export class CockpitComponent implements OnInit {
  @Output('svCreated') serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  onAddServer(name, content) {
    this.serverCreated.emit({
      serverName: name.value,
      serverContent: content.value
    })
  };

  onAddBluePrint(name, content) {
    this.blueprintCreated.emit({
      serverName: name.value,
      serverContent: content.value
    })
  }

  constructor() { }

  ngOnInit() {
  }
}
