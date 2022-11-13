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

  signupAPIUrl = 'https://cyan-yak-gown.cyclic.app/postForm';
  signinAPIUrl = 'https://cyan-yak-gown.cyclic.app/postLogin';
  getallUser = 'https://cyan-yak-gown.cyclic.app/getUserData';
  getEditedUserData = 'https://cyan-yak-gown.cyclic.app/getEditedUserData';
  UserUpdate = 'https://cyan-yak-gown.cyclic.app/postuserEdit';

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
