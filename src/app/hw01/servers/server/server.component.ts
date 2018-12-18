import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['../../../app.component.css']
})
export class ServerComponent implements OnInit {
  value="server works!"
  biding=''
  typing() {
    console.log('You are typing');
  }

  constructor() { }

  ngOnInit() {
  }

}
