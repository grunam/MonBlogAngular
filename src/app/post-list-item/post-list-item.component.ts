import { Component, Input, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIt: number;
  @Input() date: Date; 
  @Input() index: number; 
 

  constructor(private blogService: BlogService) { }

  ngOnInit() {
  }
  
  
  switchLoveIt() {
    
    this.blogService.switchLovePost(this.index);
    
  }

  switchHateIt() {
    
    this.blogService.switchHatePost(this.index);
    
    
  }
  
  deletePost(){
      
      this.blogService.removePost(this.index);
      
  }

}
