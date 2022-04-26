import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { BlogPostService } from 'src/app/Services/blog-post.service';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css']
})
export class ViewsComponent implements OnInit {
  userid: any;
  postDetails;
  Title;
  Date;
  Description;
  firstName;
  lastName;
  userDetails;
  photoURL;
  postIdForComment: string = "";

  constructor(private activeRouter: ActivatedRoute, private blogService: BlogPostService, private auth: AuthService) {
    let postId = this.activeRouter.snapshot.paramMap.get('postId');
    this.postIdForComment = postId;
    this.blogService.GetSinglePost(postId).subscribe((res) => {
      this.postDetails = res.PostContent;
      this.Title = this.postDetails.Title;
      this.Description = this.postDetails.Description;
      this.userid = this.postDetails.userID
      this.Date = this.postDetails.Date
      this.auth.getSingleData(this.userid).subscribe((result) => {
        this.userDetails = result.userData;
        this.firstName = this.userDetails.firstname
        this.lastName = this.userDetails.lastname
        this.photoURL = this.userDetails.photoURL;
      })
    })
  }

  ngOnInit(): void {
  }

}
