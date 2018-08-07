import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  testimonialsFeed = [
    {
      id:1,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio officia iste assumenda velit corporis vitae qui, in deserunt voluptate ad error quis beatae!",
      name: "John Smith",
      town: "Leeds",
      country: "UK",
    },
    {
      id:2,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In deserunt voluptate ad error quis beatae!",
      name: "Jane Smith",
      town: "Nottingham",
      country: "UK",
    },
    {
      id:3,
      description: "Lorem ipsum dolor sit!",
      name: "Stephen Towns",
      town: "Birmingham",
      country: "UK",
    },
    {
      id:4,
      description: "Odio officia iste assumenda velit corporis vitae qui, in deserunt voluptate ad error quis beatae!",
      name: "Tracey Ullman",
      town: "Huddersfield",
      country: "UK",
    },
    {
      id:5,
      description: "Lorem ipsum corporis vitae qui, in deserunt voluptate ad error quis beatae!",
      name: "Donald Pleasant",
      town: "London",
      country: "UK",
    },
    {
      id:6,
      description: "Lorem ipsum!",
      name: "Malcolm Townsend",
      town: "Norwich",
      country: "UK",
    },
    {
      id:7,
      description: " in deserunt voluptate ad error quis beatae!",
      name: "Jane Doe",
      town: "Woolwich",
      country: "UK",
    },
    {
      id:8,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio officia iste assumenda velit corporis vitae qui, in deserunt voluptate ad error quis beatae!",
      name: "Collette Marsdon",
      town: "London",
      country: "UK",
    }
  ]

}
