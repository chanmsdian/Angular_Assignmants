import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {
  showSecret = true;
  log: any = [];
  logs: any = [];
  constructor() { }

  ngOnInit(): void {
  }
  onToggleDisplay() {
    this.showSecret = !this.showSecret;
    this.logs.push(this.logs.length + 1)
    this.log.push(new Date());
  }
  reset(){
    this.showSecret=false;
    this.log=[];

  }
}
