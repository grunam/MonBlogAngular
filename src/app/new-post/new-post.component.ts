import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../models/post.model';
import { BlogService } from '../services/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;
  private posts : any[];
  
  
  constructor(private formBuilder: FormBuilder, private blogService: BlogService,
              private router: Router) { }
              
  ngOnInit() {
    this.initForm();
    this.posts = this.blogService.getPosts();
  }
  
  initForm() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }
  
  onSavePost() {
       
    const title = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;
    const created_at = new Date();
    const id = this.posts[(this.posts.length -1)].id + 1;
    const loveIts = 3;
    
    const newPost = new Post(id, title, created_at); 
    newPost.content = content;
    newPost.loveIts = loveIts;
    
    this.blogService.addPost(newPost);
    this.router.navigate(['/posts']);
  }

}
