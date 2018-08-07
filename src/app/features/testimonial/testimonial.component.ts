import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-testimonial]',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() description:string;
  @Input() name:string;
  @Input() town:string;
  @Input() country:string;

}
