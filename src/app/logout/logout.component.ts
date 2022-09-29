import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    let token=sessionStorage.getItem("token");
    console.log(token);
    if(token==null)
    {
      this.router.navigate(['login']);
    }
    sessionStorage.clear();
    localStorage.clear();
  }

}
