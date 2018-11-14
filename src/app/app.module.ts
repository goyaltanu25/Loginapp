import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import {HttpModule} from '@angular/http';
//import { EqualValidator } from './signup/validate-equal.directive'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginformComponent } from './loginform/loginform.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { LoginService } from './services/login.service';
import { SignupService } from './services/signup.service';


const appRoutes: Routes=[
  {
    path: '',
    pathMatch: 'full',
    component: DashboardComponent
  } ,
  {
   path: 'loginform',
   component: LoginformComponent
 } ,
 {
  path: 'dashboard',
  component: DashboardComponent
} ,
{
  path: 'signup',
  component: SignupComponent
} ,
  
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginformComponent,
    FooterComponent,
    DashboardComponent,
    SignupComponent,
    //EqualValidator
   
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [LoginService,SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
