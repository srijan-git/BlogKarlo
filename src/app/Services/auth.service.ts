import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../Class/user';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  loader = new BehaviorSubject<Boolean>(false);

  signupAPIUrl = 'https://blogkarlo-api.onrender.com/postForm';
  signinAPIUrl = 'https://blogkarlo-api.onrender.com/postLogin';
  getallUser = 'https://blogkarlo-api.onrender.com/getUserData';
  getEditedUserData = 'https://blogkarlo-api.onrender.com/getEditedUserData';
  UserUpdate = 'https://blogkarlo-api.onrender.com/postuserEdit';

  postSignup(formData): Observable<User[]> {
    return this.http.post<User[]>(this.signupAPIUrl, formData);
  }
  getSingleData(id): Observable<any> {
    return this.http.get<any>(`${this.getEditedUserData}/${id}`);
  }
  postSignin(formData): Observable<User[]> {
    return this.http.post<User[]>(this.signinAPIUrl, formData);
  }

  getUser(): Observable<any> {
    return this.http.get<any>(this.getallUser);
  }

  updateData(data): Observable<User[]> {
    // const url1 = `${this.productEdit}/${dataId}`
    return this.http.post<User[]>(this.UserUpdate, data);
  }
}
