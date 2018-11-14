import { Component, OnInit } from '@angular/core';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email: string;
  psw:string;
  pswrepeat;
  constructor(private signUpService: SignupService) { }

  ngOnInit() {
  }
 
  onSignUp(){
    this.signUpService.detailsSignUp(this.email,this.psw,this.pswrepeat);

  }

}
