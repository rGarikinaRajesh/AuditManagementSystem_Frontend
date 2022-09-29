import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../basic-authentication.service';
import { UserCredentials } from '../userCredentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:any="";
  password:any="";
  userCredentials!:UserCredentials;
  invalidCredentials:boolean=false;

  constructor(private service:BasicAuthenticationService,
    private route:Router) { }

  ngOnInit(): void {
    
  }

  handleJWTAuthentication()
  {
    this.userCredentials=new UserCredentials(this.username,this.password);
    console.log(this.userCredentials);
    this.service.executeJWTAuthenticationService(this.userCredentials).subscribe(
           data=>{
        console.log("Token Generated")
        this.route.navigate(['home']);
      },
      error=>
      {
        this.invalidCredentials=true;
        this.username=null;
        this.password=null;
        console.log("wrong credentials");
      }
    );
  }

}
