import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { UserCredentials } from '../userCredentials';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username:any="";
  password:any="";
  userCredentials!:UserCredentials;

  constructor(private service:RegisterService,
    private route:Router) { }

  ngOnInit(): void {
  }

  register()
  {
    this.userCredentials=new UserCredentials(this.username,this.password);
    console.log(this.userCredentials);
    this.service.register(this.userCredentials).subscribe(
           data=>{
        console.log("Registered Successfully!!!")
        this.route.navigate(['login']);
  }
    );
  }
}
