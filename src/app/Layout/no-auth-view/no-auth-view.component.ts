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
  SamplePosts: any = []
  constructor(private postService: BlogPostService) {
    this.postService.GetAllPosts().subscribe(res => {
      this.allPosts = res.postDetails;
      for (let i = 0; i < 3; i++) {
        this.SamplePosts.push({ Title: this.allPosts[i].Title, Date: this.allPosts[i].Date, Description: this.allPosts[i].Description })
      }
    })
  }

  ngOnInit(): void {
    this.rellax = new Rellax('.rellax');
    AOS.init();
  }

}
