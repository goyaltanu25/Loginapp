import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Http} from '@angular/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onLogin(){ 
    console.log("Login click");
    this.router.navigate(['loginform']);
  }
  onSignup(){ 
    console.log("SignUp click");
    this.router.navigate(['signup']);
  }
}
