import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['../../app.component.css']
})
export class ServersComponent implements OnInit {
  click: number;
  countDown: number;
  timeLeft: number;
  clickedTotal: Array<object>;
  startBtnDisabled: boolean;
  isClickBtnDisplay: boolean;
  isResultDisplay: boolean;
  threeMilliseconds: number;
  oneMilliseconds: number;
  isHWDisplay: boolean;
  label: string;

  startTheGame() {
    this.timeLeft = 3;
    this.startBtnDisabled = true;
    this.isClickBtnDisplay = true;
    this.isResultDisplay = false;
    this.countDown = window.setInterval(() => {
      this.timeLeft--;
    }, this.oneMilliseconds);
    setTimeout(() => {
      this.stopTheGame();
      this.clickWatcher(this.click);
      this.click = 0;
    }, this.threeMilliseconds);
  }

  increment() {
    return this.click++;
  }

  clickWatcher(value: number) {
    let time = moment().format('h:mm:ss a');
    value > 0 ? this.clickedTotal.push({value, time}) : null
  };

  stopTheGame() {
    clearInterval(this.countDown);
    this.startBtnDisabled = false;
    this.isClickBtnDisplay = false;
    this.isResultDisplay = true;
  }

  display(status: boolean) {
    this.isHWDisplay = status;
    return this.isHWDisplay
  }

  constructor() {
    this.isHWDisplay = false;
    this.label = "HW 01";
    this.click = 0;
    this.threeMilliseconds = 3000;
    this.oneMilliseconds = 1000;
    this.clickedTotal = [];
  }

  ngOnInit() {
  }

}
