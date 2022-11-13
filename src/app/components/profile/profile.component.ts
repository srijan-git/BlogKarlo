import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any = {};
  userID: any;
  firstName: string;
  lastName: string;
  photoURL: any;
  Email: string;
  Bio: string;
  Interests: string;
  Hobbies: string;

  userLoginCred = window.localStorage.getItem('userId');
  constructor(private auth: AuthService) {
    this.auth.getUser().subscribe(res => {
      this.user = res.userData;
      for (let i = 0; i < this.user.length; i++) {
        if (this.user[i]._id == this.userLoginCred) {
          this.userID = res.userData[i]._id;
          this.photoURL = res.userData[i].photoURL;
          this.firstName = res.userData[i].firstname;
          this.lastName = res.userData[i].lastname;
          this.Email = res.userData[i].email;
          this.Bio = res.userData[i].bio;
          this.Hobbies = res.userData[i].hobbies.split(",");
        }
      }
    })
  }

  ngOnInit(): void {
  }

}
