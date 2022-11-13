import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPostService } from 'src/app/Services/blog-post.service';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements OnInit {
  allPosts: any;
  userid;
  constructor(private posts: BlogPostService, private activeRouter: ActivatedRoute) {
    this.userid = this.activeRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.posts.GetAllPosts().subscribe((data) => {
      this.allPosts = data.postDetails
    })
  }
  public deleteblog(id: any) {
    this.posts.DeletePost(id).subscribe((response => {
      window.location.reload();
    }))
  }

}
