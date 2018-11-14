import {Injectable} from '@angular/core';
import {Http} from '@angular/http';


@Injectable()

export class LoginService{
   private isUserLoggedIn;
  

   constructor(private http:Http){
       this.isUserLoggedIn=false;
   } 

//    setUserLoggedIn(){
//      this.isUserLoggedIn=true;
  
//    }

//    getUserLoggedIn(){
//        return this.isUserLoggedIn;
//    }
 details(uname: string,pname: string)
 {
    this.http.put('https://http-login.firebaseio.com/data.json',{username: uname, password: pname})
    .subscribe( );
   }
}