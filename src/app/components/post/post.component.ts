import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPostService } from 'src/app/Services/blog-post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  allPosts: any;
  // TotalPosts;
  userid

  constructor(private posts: BlogPostService, private activeRouter: ActivatedRoute) {
    this.userid = this.activeRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.posts.GetAllPosts().subscribe((data) => {
      this.allPosts = data.postDetails
    })
  }

  deletepost(id) {
    console.log(id);
    this.posts.DeletePost(id).subscribe((serverresponse) => {
      window.location.reload()
    })
  }

}
