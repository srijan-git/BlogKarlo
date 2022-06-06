import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { SessionService } from 'src/app/Services/session.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginresponse;
  message: string = "";
  Errormessage: any;
  adminEmail;
  adminPassword;
  userID = window.localStorage.getItem('userId');

  constructor(private authservice: AuthService, private router: Router, private session: SessionService) {
    if (localStorage.getItem('token')) {
      router.navigate(['/myblogs', this.userID]);
    }
    if (localStorage.getItem('Admin')) {
      this.router.navigate(['/AdminblogList'])
    }
  }

  ngOnInit(): void { }


  login(formValue: any) {
    this.adminEmail = "admin@gmail.com"
    this.adminPassword = "Admin"
    if (formValue.value.email == this.adminEmail && formValue.value.password == this.adminPassword) {
      localStorage.setItem('Admin', this.adminEmail)
      window.location.reload()
    } else {
      this.authservice.postSignin(formValue.value).subscribe(res => {
        this.loginresponse = res;
        console.log(this.loginresponse)
        this.session.SetgetResponseFormLogin(this.loginresponse.token, this.loginresponse.result._id)
        window.location.reload();
      }, error => {
        this.Errormessage = error.error.message
        alert(`${this.Errormessage}`)
        window.location.reload();
      })
    }
  }
}
