import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {
  userName = '';
  constructor() { }

  ngOnInit(): void {
  }
  updateUserName(event: any) {
    this.userName = (<HTMLInputElement>event.target).value;
    console.log(this.userName);
  }
  onClickReset(event: any) {
    this.userName = '';
  }

}
