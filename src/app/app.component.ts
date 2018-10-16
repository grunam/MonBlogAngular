import { Component, OnInit } from '@angular/core';
import { BlogService } from './services/blog.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})




export class AppComponent implements OnInit {
  
  constructor(private blogService: BlogService) { }
  
  title = 'Mon blog';

  
 ngOnInit() {
     //this.blogService.savePostsToServer();
     this.blogService.getPostsFromServer();
 }
  

}
