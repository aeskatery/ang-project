import { Component, OnInit } from '@angular/core';
import {IPosts} from "../models/IPosts";
import {posts as data} from "../data/posts";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: IPosts[] = data
  constructor() { }

  ngOnInit(): void {

  }

}
