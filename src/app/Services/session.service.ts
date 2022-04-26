import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  SetgetResponseFormLogin(token, userId) {
    window.localStorage.setItem('token', token)
    window.localStorage.setItem('userId', userId)
  }

  getToken() {
    return window.localStorage.getItem('token')
  }

  getUserData() {
     window.sessionStorage.getItem('userId')
  }

  removeToken() {
    window.localStorage.clear()
  }

  constructor() { }

}
