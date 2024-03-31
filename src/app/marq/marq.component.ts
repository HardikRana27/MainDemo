import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-marq',
  templateUrl: './marq.component.html',
  styleUrl: './marq.component.css',
})
export class MarqComponent {
  constructor() {}

  ngOnInit(): void {
    // Access the marquee element and change its properties or content
    // const marqueeElement: HTMLMarqueeElement = this.marquee.nativeElement;
    // marqueeElement.scrollAmount = 10; // Set the scroll speed
    // // You can also change other properties or manipulate the content dynamically
  }
}
