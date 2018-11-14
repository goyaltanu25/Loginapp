import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { FormControl, FormGroup ,Validators} from '@angular/forms';
import { Observable } from 'rxjs/Observable';





@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css'],
 
})
export class LoginformComponent implements OnInit {
loginForm: FormGroup;
 
constructor(private userLogin: LoginService) { 

  }

ngOnInit() {
 this.loginForm=new FormGroup({
   'ProjectName': new FormControl(null, Validators.required,this.asyncInvalidProjectName),
   'EmailId': new FormControl(null,[ Validators.required, Validators.email]),
   'ProjectStatus': new FormControl('Finished')
 }); 
}

onSubmit(){
  console.log(this.loginForm);
}

// customvalidation(control: FormControl): {[s: string]: boolean}{
//   if (control.value=== 'Golf')
//   {
//     return {'invalid project name' : true}
//   }
// else
// {

//   return null;
// }
 


 asyncInvalidProjectName(control: FormControl): Promise<any> | Observable<any> {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (control.value === 'Testproject') {
        resolve({'invalidProjectName': true});
      } else {
        resolve(null);
      }
    }, 2000);
  })
  return promise;
}
}



