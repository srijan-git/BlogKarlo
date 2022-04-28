import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Class/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signupAPIUrl = "https://bog-karlo.herokuapp.com/postForm"
  signinAPIUrl = "https://bog-karlo.herokuapp.com/postLogin"
  getallUser = "https://bog-karlo.herokuapp.com/getUserData"
  getEditedUserData = "https://bog-karlo.herokuapp.com/getEditedUserData"
  UserUpdate = "https://bog-karlo.herokuapp.com/postuserEdit"

  postSignup(formData): Observable<User[]> {
    return this.http.post<User[]>(this.signupAPIUrl, formData)
  }
  getSingleData(id): Observable<any> {
    return this.http.get<any>(`${this.getEditedUserData}/${id}`)
  }
  postSignin(formData): Observable<User[]> {
    return this.http.post<User[]>(this.signinAPIUrl, formData)
  }

  getUser(): Observable<any> {
    return this.http.get<any>(this.getallUser)
  }

  updateData(data): Observable<User[]> {
    // const url1 = `${this.productEdit}/${dataId}`
    return this.http.post<User[]>(this.UserUpdate, data)
  }
}
