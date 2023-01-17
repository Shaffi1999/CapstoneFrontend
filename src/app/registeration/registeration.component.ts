import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterationService } from '../registeration.service';
import { User } from '../user';
import { NgForm} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
  user=new User();

  constructor(private route:Router,private service:RegisterationService) { }

  ngOnInit(): void {
  }

 
  registeration()
  {
    this.service.registerUserFromRemote(this.user).subscribe(
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
