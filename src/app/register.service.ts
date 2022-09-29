import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { UserCredentials } from './userCredentials';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

register(userCredentials: UserCredentials)
{
  return this.http.post<any>("http://localhost:8080/register",userCredentials).pipe(map(data=>
  {
    return data;
  }));
}

}
