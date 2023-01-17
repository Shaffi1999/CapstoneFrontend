import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RegisterationService } from '../registeration.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 user=new User();
 message="";
  constructor(private service:RegisterationService,private route:Router) { }

  ngOnInit(): void {
   
  }

  public login()
  {
      this.service.loginUserFromRemote(this.user).subscribe(
        data => {console.log("response recieved"),
        localStorage.setItem("userData",this.user.userId.toString());
        this.route.navigate(['/loginsuccess'])
      }
        ,
        error =>{console.log("exception occurred");
        this.message="Bad Credentials Please Enter A Valid User Id Id And Password";
      }
      )
  }
  
  gotoRegisteration()
  {
    this.route.navigate(['/registeration']);
  }
  
  

}
