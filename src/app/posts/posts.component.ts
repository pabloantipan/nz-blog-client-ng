import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public posts: any;

  constructor(
    private postsService: PostsService,
  ) { }

  async ngOnInit() {
    this.posts = Object.values(await this.postsService.getPosts().toPromise());
    console.log(this.posts);
  }

}
