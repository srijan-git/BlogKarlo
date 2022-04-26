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
  userID = window.localStorage.getItem('userId');

  constructor(private authservice: AuthService, private router: Router, private session: SessionService) {
    if (localStorage.getItem('token')) {
      router.navigate(['/myblogs',this.userID]);
    }
  }

  ngOnInit(): void { }


  login(formValue: any) {
    this.authservice.postSignin(formValue.value).subscribe(res => {
      this.loginresponse = res;
      console.log(this.loginresponse)
      this.session.SetgetResponseFormLogin(this.loginresponse.token, this.loginresponse.result._id)
      window.location.reload();
    })
  }
}
