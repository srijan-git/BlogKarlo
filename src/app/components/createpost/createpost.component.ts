import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { BlogPostService } from 'src/app/Services/blog-post.service';
@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {
  CreatedData: FormGroup;
  userID: any;
  userLoginCred = window.localStorage.getItem('userId');
  message;

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    maxHeight: '15rem',
    placeholder: 'Enter text here...',
  };



  constructor(private fb: FormBuilder, private BlogContent: BlogPostService, public router: Router) {
    this.CreatedData = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }
  createPost() {
    const formData = new FormData();
    formData.append('title', this.CreatedData.get('title').value);
    formData.append('description', this.CreatedData.get('description').value);
    this.BlogContent.ContentCreation(this.CreatedData.value, this.userLoginCred).subscribe((res) => {
      this.message = res
      if (this.message) {
        alert(`${this.message.message}`)
        window.location.reload();
      }
    })
  }

}
