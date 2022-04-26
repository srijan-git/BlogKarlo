import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { BlogPostService } from 'src/app/Services/blog-post.service';

@Component({
  selector: 'app-writers-profile',
  templateUrl: './writers-profile.component.html',
  styleUrls: ['./writers-profile.component.css']
})
export class WritersProfileComponent implements OnInit {
  allPosts;
  userPostsContents: any = [];
  postID;
  userid: any;
  user;
  postDetails;
  Title;
  Date;
  Description;
  firstName;
  lastName;
  userDetails;
  photoURL;
  Bio;
  Hobbies;
  USERID
  writersPost: any = [];
  writersPostObj: any = {};
  writersPostLength;
  constructor(private activeRouter: ActivatedRoute, private blogService: BlogPostService, private auth: AuthService) {
    this.postID = this.activeRouter.snapshot.paramMap.get('postId');

    this.blogService.GetSinglePost(this.postID).subscribe((res) => {
      this.postDetails = res.PostContent;
      this.Title = this.postDetails.Title;
      this.Description = this.postDetails.Description;
      this.userid = this.postDetails.userID
      this.Date = this.postDetails.Date
      this.auth.getSingleData(this.userid).subscribe((result) => {
        this.userDetails = result.userData;
        this.USERID = this.userDetails._id;
        this.firstName = this.userDetails.firstname
        this.lastName = this.userDetails.lastname
        this.photoURL = this.userDetails.photoURL;
        this.Bio = this.userDetails.bio;


        this.auth.getUser().subscribe(res => {
          this.user = res.userData;
          for (let i = 0; i < this.user.length; i++) {
            if (this.user[i]._id == this.userid) {
              this.Hobbies = res.userData[i].hobbies.split(",");
            }
          }
        })


        this.blogService.GetAllPosts().subscribe(res => {
          this.allPosts = res.postDetails
          for (let i = 0; i < this.allPosts.length; i++) {
            if (this.allPosts[i].userID == this.USERID) {
              this.userPostsContents.push(this.allPosts[i]._id);
            }
          }
          for (let i = 0; i < this.userPostsContents.length; i++) {
            this.blogService.GetSinglePost(this.userPostsContents[i]).subscribe(res => {
              this.writersPostObj = { PostID: res.PostContent._id, UserID: res.PostContent.userID, Title: res.PostContent.Title, Description: res.PostContent.Description, Date: res.PostContent.Date }
              this.writersPost.push(this.writersPostObj);
              this.writersPostLength = this.writersPost.length;
            })
          }
        })
      })
    })
  }
  ngOnInit(): void {

  }

}
