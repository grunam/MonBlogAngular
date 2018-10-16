import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Subscription } from 'rxjs/subscription';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {


  @Input() mesPosts: any[]; 
  blogSubscription: Subscription;
 

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogSubscription = this.blogService.postsSubject.subscribe(
        (posts: any[]) => {
            this.mesPosts = posts;
        }
    );
    this.blogService.emitPostsSubject();
  }
  
  ngOnDestroy(){
      this.blogSubscription.unsubscribe();
  }

}
