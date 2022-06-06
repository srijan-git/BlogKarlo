import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { BlogPostService } from 'src/app/Services/blog-post.service';

@Component({
  selector: 'app-blogs-edit',
  templateUrl: './blogs-edit.component.html',
  styleUrls: ['./blogs-edit.component.css']
})
export class BlogsEditComponent implements OnInit {
  EditedData: FormGroup;
  blog: any;
  userID;
  userIMG;
  message: string;
  constructor(private fb: FormBuilder, private BlogContent: BlogPostService, private user: AuthService, public router: Router, public Actrout: ActivatedRoute) {
    const blogid = this.Actrout.snapshot.paramMap.get('id')

    this.BlogContent.GetSinglePost(blogid).subscribe((res) => {
      this.blog = res.PostContent;
      this.userID = this.blog.userID;
      this.user.getSingleData(this.userID).subscribe(res => {
        this.userIMG = res.userData.photoURL
      })

      this.EditedData = this.fb.group({
        PID: this.blog._id,
        userID: this.blog.userID,
        Title: this.blog.Title,
        Description: this.blog.Description,
        Date: this.blog.Date
      });
    })
  }

  ngOnInit(): void {
  }
  editBlog() {
    this.message = "Updating Profile...";
    const formData = new FormData()
    formData.append('PID', this.EditedData.get('PID').value);
    formData.append('Title', this.EditedData.get('Title').value);
    formData.append('Description', this.EditedData.get('Description').value);
    this.BlogContent.updatePost(formData).subscribe((res) => {
      if (res) {
        this.message = "Profile Updated Successfully.";
      }
      window.location.reload()
    })
  }

}
