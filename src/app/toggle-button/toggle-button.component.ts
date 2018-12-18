import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'toggleBtn',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['../app.component.css'],
})
export class ToggleButtonComponent implements OnInit {
  isHWDisplay: boolean;
  @Input('buttonLabel') labelName: string;
  @Output() onToggleButton = new EventEmitter();

  toggleHW(): void {
    this.isHWDisplay =! this.isHWDisplay;
    console.log(this.isHWDisplay);
    this.onToggleButton.emit(this.isHWDisplay)
  }

  constructor() { this.isHWDisplay = false; }

  ngOnInit() {
  }

}
