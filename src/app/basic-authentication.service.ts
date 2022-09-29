import { Injectable } from '@angular/core';
import { UserCredentials } from './userCredentials';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {
  

  constructor(private http:HttpClient) { }


  executeJWTAuthenticationService(userCredentials: UserCredentials) {
    return this.http.post<any>("http://localhost:8080/login",userCredentials).pipe(
      map(data=>{
        sessionStorage.setItem("username", userCredentials.username);
          let tokenStr = data.token;
          console.log(tokenStr);
          sessionStorage.setItem("token", tokenStr);
          return data;
      })
    ); 
  }
}
