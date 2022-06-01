import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../../Services/blog-post.service'
import * as Rellax from 'rellax';
import * as AOS from 'aos'
@Component({
  selector: 'app-no-auth-view',
  templateUrl: './no-auth-view.component.html',
  styleUrls: ['./no-auth-view.component.css']
})
export class NoAuthViewComponent implements OnInit {
  rellax: any;
  allPosts: any;
  constructor(private postService: BlogPostService) {
    this.postService.GetAllPosts().subscribe(res => {
      this.allPosts = res.postDetails;
      console.log(this.allPosts);
    })
  }

  ngOnInit(): void {
    this.rellax = new Rellax('.rellax');
    AOS.init();
  }

}
