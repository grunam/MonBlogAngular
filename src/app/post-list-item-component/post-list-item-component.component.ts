import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIt: number;
  @Input() date: Date; 
  
  @Input() index: number; 

  constructor() { }

  ngOnInit() {
  }
  
  
  switchLoveIt(i: number) {
    this.loveIt = 1;
  }

  switchHateIt(i: number) {
    this.loveIt = 0;
  }

}
