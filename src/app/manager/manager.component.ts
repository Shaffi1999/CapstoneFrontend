import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RegisterationService } from '../registeration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  user=new User();
  message="";
   constructor(private service:RegisterationService,private route:Router) { }
 
   ngOnInit(): void {
    
   }
 
   public login()
   {
       this.service.loginManagerFromRemote(this.user).subscribe(
         data => {console.log("response recieved"),
         this.route.navigate(['/success'])
       }
         ,
         error =>{console.log("exception occurred");
         this.message="Bad Credentials Please Enter A Valid Manager Id Id And Password";
       }
       )
   }
   
   gotoRegisteration()
   {
     this.route.navigate(['/mregisteration']);
   }
   

}
