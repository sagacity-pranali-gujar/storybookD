import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttona1',
  templateUrl: './buttona1.component.html',
  styleUrls: ['./buttona1.component.css']
})
export class Buttona1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @Input()
  title:any;
  
  @Input()
  label:any;

  @Input()
  backgroundColor?: string;


}
