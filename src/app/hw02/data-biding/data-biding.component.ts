import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['../../app.component.css']
})
export class DataBidingComponent implements OnInit {
  isHWDisplay: boolean;
  bidingData: string;
  label: string;

  display(status: boolean) {
    this.isHWDisplay = status;
    return this.isHWDisplay;
  }

  constructor() {
    this.isHWDisplay = false;
    this.bidingData = '';
    this.label = 'HW 02'
  }

  ngOnInit() {
  }

}
