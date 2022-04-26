import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { BlogPostService } from 'src/app/Services/blog-post.service';
import { CommentsService } from 'src/app/Services/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input("postIdForComment") postIdForComment: string;
  commentsPost: FormGroup;
  userID;
  postID;
  commentID;
  comments: any = [];
  firstname;
  lastname;
  Name: any = [];
  userDetails;
  constructor(private fb: FormBuilder, private actRoute: ActivatedRoute, private router: Router, private commentService: CommentsService, private blogpostService: BlogPostService, private authService: AuthService) {
    this.commentsPost = this.fb.group({
      comments: ['', [Validators.required]],
    })
    this.userID = this.actRoute.snapshot.paramMap.get('userid');
    this.postID = this.actRoute.snapshot.paramMap.get('postId');
  }

  ngOnInit(): void {
    this.commentService.GetAllComments().subscribe(res => {
      for (let i = 0; i < res.commentDetails.length; i++) {
        if (res.commentDetails[i].postID == this.postID) {
          this.authService.getSingleData(res.commentDetails[i].userID).subscribe(result => {
            this.comments.push({ postID: res.commentDetails[i].postID, Date: res.commentDetails[i].Date, Comments: res.commentDetails[i].Comments, userID: res.commentDetails[i].userID, Firstname: result.userData.firstname, Lastname: result.userData.lastname })
          })
        }
      }
    })
  }



  postComment() {
    const formData = new FormData();
    formData.append('comments', this.commentsPost.get('comments').value);
    this.commentService.CommentCreation(formData, this.postIdForComment, this.userID).subscribe(res => {
      window.location.reload();

    })
  }
}

