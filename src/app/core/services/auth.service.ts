import { booleanAttribute, Injectable } from '@angular/core';
import { LoginRequest } from '../models/loginrequest';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthentificate:boolean=false;

  constructor() { }

  signin(request:LoginRequest)
  {
    if(request.log==='admin' && request.pass==='admin')
      {
        this.isAuthentificate=true;
        sessionStorage.setItem('auth',this.isAuthentificate+'');
      }
      console.log("-signin----"+this.isAuthentificate)
  }
  signout()
  {
    this.isAuthentificate=false;
    sessionStorage.setItem('auth',this.isAuthentificate+'');

  }

  checkAuthentificate()
  {
    let a:any=sessionStorage.getItem('auth')
    let res:boolean;
    res=(<boolean>a)
    console.log(a+'---'+res)
    return res;//this.isAuthentificate;
  }
}
