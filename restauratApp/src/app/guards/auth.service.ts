import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn: boolean = false;
  constructor() { }

  login(email: string, password : string): boolean{
    if(email === "fernando@gmail.com" && password ==="qwerty"){
      this.isLoggedIn = true;
    }else{
      this.isLoggedIn = false;
    }
    return this.isLoggedIn;
  }

  logout(): boolean {
   return this.isLoggedIn = false;
  }
  isUserLoggedIn(){
    console.log(this.isLoggedIn);
    return this.isLoggedIn;
  }
}