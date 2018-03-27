import { Component, OnInit } from '@angular/core';
import { Post } from '../api/models/post';
import { PostService } from '../api/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  postList: Post[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(
      posts => this.postList = posts
    )
  }
}
