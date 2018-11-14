import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'


@Injectable()

export class SignupService{
   private isUserLoggedIn;
  

   constructor(private http:Http){
     
   } 

   detailsSignUp(email: string, password: string, password_repeat: string)
   {   debugger;
       this.http.post('https://http-login.firebaseio.com/data.json', {email,password,password_repeat})
       .subscribe(
           (response: Response) => {});
       }
    }