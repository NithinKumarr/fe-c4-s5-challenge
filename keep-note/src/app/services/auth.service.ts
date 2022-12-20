import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isLoggedIn: boolean = false;
  
    login(code: string) {
        this.isLoggedIn = code === "admin"
        return this.isLoggedIn;
    }
    logout() {
        this.isLoggedIn = false;
    }
}
