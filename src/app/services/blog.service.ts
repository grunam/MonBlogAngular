import { Subject } from 'rxjs/subject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from '../models/post.model';

@Injectable()
export class BlogService {

  
  postsSubject = new Subject<any[]>();
  private posts;
  /*  
  private posts = [
    {
      id: 1,
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n\
Nulla sed sollicitudin dolor, ut bibendum augue. Fusce vel facilisis diam. \n\
Suspendisse potenti. Vivamus porta vitae mauris in feugiat. \n\
Donec a facilisis lectus. Maecenas felis lectus, pellentesque quis nunc ut, hendrerit pellentesque dui.',
      loveIts: 1,
      created_at: new Date(2017, 10, 24, 11)
    },
    {
      id: 2,      
      title: 'Mon deuxième post',
      content: 'Duis id ante dapibus, maximus arcu at, tristique ex. \n\
Mauris laoreet libero a tincidunt semper. Integer sit amet ultrices felis, condimentum porta lorem. \n\
Donec sollicitudin vel velit eu scelerisque. \n\
In blandit porttitor mauris, ut dictum risus elementum et. Curabitur quis bibendum nulla.',
      loveIts: 0,
      created_at: new Date(2017, 10, 24, 11)
    },
    {
      id: 3,  
      title: 'Encore un post',
      content: 'Sed eu turpis nisi. Sed sollicitudin finibus purus, at ornare nunc lacinia vel. \n\
Suspendisse volutpat tempor ex a commodo. \n\
Etiam aliquet varius diam, ut accumsan elit accumsan sit amet. \n\
Pellentesque et ullamcorper turpis. Fusce vitae felis nisi. Vivamus sed ipsum lectus. \n\
Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      loveIts: 0,  
      created_at: new Date(2017, 10, 24, 11)
    },
    {
      id: 4,  
      title: 'Encore un post 2',
      content: 'Sed eu turpis nisi. Sed sollicitudin finibus purus, at ornare nunc lacinia vel. \n\
    Suspendisse volutpat tempor ex a commodo. \n\
    Etiam aliquet varius diam, ut accumsan elit accumsan sit amet. \n\
    Pellentesque et ullamcorper turpis. Fusce vitae felis nisi. Vivamus sed ipsum lectus. \n\
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      loveIts: 0,  
      created_at: new Date(2017, 10, 24, 11)
    },
    {
      id: 4,  
      title: 'Encore un post 3',
      content: 'Sed eu turpis nisi. Sed sollicitudin finibus purus, at ornare nunc lacinia vel. \n\
Suspendisse volutpat tempor ex a commodo. \n\
Etiam aliquet varius diam, ut accumsan elit accumsan sit amet. \n\
Pellentesque et ullamcorper turpis. Fusce vitae felis nisi. Vivamus sed ipsum lectus. \n\
Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      loveIts: 0,  
      created_at: new Date(2017, 10, 24, 11)
    }
    
  ];
 */
  
  constructor(private httpClient: HttpClient){}
  
  getPosts(){
      return this.posts;
  }
  
  savePostsToServer() {
    this.httpClient
      .put('https://blog-e9e3c.firebaseio.com/posts.json', this.posts)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }
  
  
  getPostsFromServer() {
    this.httpClient
      .get<any[]>('https://blog-e9e3c.firebaseio.com/posts.json')
      .subscribe(
        (response) => {
          this.posts = response;
          this.emitPostsSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }
  
 
  
  addPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePostsToServer();
    this.emitPostsSubject();
  }
  
  
  removePost(index: number){
       
    this.posts.splice(index,1);
    this.savePostsToServer();  
    this.emitPostsSubject();
  }
  
  switchHatePost(index: number){
      
    this.posts[index].loveIts = 0;
    console.log(this.posts);
    this.savePostsToServer();  
    this.emitPostsSubject();
    
  }
  
  
  switchLovePost(index: number){
      
    this.posts[index].loveIts = 1;
    console.log(this.posts);
    this.savePostsToServer();  
    this.emitPostsSubject();
    
  }
  
  
  getPostByOb(ob: object) {
    const post = this.posts.find(
      (s) => {
        return s === ob;
      }
    );
    return post;
  }
  
  
  emitPostsSubject(){
      this.postsSubject.next(this.posts);
      //this.postsSubject.next(this.posts.slice());
  }
  
  
}
