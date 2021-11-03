import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  imgSrc : string ='/assets/gateway-to-india-19310353.jpg';

  @Input()
  alttxt? : string ='Gateway-To-India';

  @Input()
  figCaptionTxt? : string = 'The Gateway of India is an arch-monument built in the early 20th century in the city of Mumbai, India.';

  @Input()
  imgOpacity? : number = 1;
}
