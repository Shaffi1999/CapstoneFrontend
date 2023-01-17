import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterationService } from '../registeration.service';
import { User } from '../user';
@Component({
  selector: 'app-manager-registeration',
  templateUrl: './manager-registeration.component.html',
  styleUrls: ['./manager-registeration.component.css']
})
export class ManagerRegisterationComponent implements OnInit {
  user=new User();
  constructor(private route:Router,private service: RegisterationService) { }

  ngOnInit(): void {
  }
  registeration()
  {
    this.service.registerManagerFromRemote(this.user).subscribe(
      data => {console.log("response recieved"),
      alert("Registeration Successful");
      this.route.navigate(['/']);
    }
      ,
      error =>{console.log("exception occurred"),
       alert("This Email Is Already In Use");
     
    }
    )
    
  }

  loguser()
  {
    this.route.navigate  (['/']);
  }

}
