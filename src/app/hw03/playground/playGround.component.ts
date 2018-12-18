import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'playGround',
  templateUrl: './playGround.component.html',
  styleUrls: ['./playGround.component.css']
})
export class playGroundComponent implements OnInit {
  private serverElements: Array<object>;
  isHWDisplay: boolean;
  label: string;

  display(status: boolean) {
    this.isHWDisplay = status;
    return this.isHWDisplay;
  }

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: true,
      name: serverData.serverName,
      content: serverData.serverContent
    })
  };

  onBlueprintAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: false,
      name: serverData.serverName,
      content: serverData.serverContent
    })
  };

  constructor() {
    this.isHWDisplay = false;
    this.label = 'HW 03';
    this.serverElements = [
      {type: true, name: 'name', content: 'content of server type'},
      {type: false, name: 'name', content: 'content of blueprint type'}
    ];
  }

  ngOnInit() {
  }
}
