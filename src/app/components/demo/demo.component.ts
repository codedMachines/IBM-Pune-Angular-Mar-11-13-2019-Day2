import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  message: string;

  constructor() { }

  ngOnInit() {
    this.message = 'Hello';
  }

  btnClicked(event) {
    alert('OUCH!! That hurt.\nPlease be gentle...');
    console.log(event);
  }
}
