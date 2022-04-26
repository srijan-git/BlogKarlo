import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-my-blogs',
  templateUrl: './my-blogs.component.html',
  styleUrls: ['./my-blogs.component.css']
})
export class MyBlogsComponent implements OnInit {

  user: any = {};
  userID: any;
  data: any;
  firstName: any;
  lastName: any;
  photoURL;
  posts: any[] = [];

  constructor(private auth: AuthService, private route: ActivatedRoute) {
    this.userID = this.route.snapshot.paramMap.get('id');
    this.auth.getSingleData(this.userID).subscribe((res) => {
      this.data = res.userData;
      this.firstName = this.data.firstname,
        this.lastName = this.data.lastname,
        this.photoURL = this.data.photoURL
    })
  }

  ngOnInit(): void {

  }



}
