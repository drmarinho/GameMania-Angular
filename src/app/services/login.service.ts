import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpCient: HttpClient) { }
  
  url = "http://localhost:3000/login"

  login(User: User): Observable<any>{

    return this.httpCient.post(this.url, JSON.stringify(User), {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      observe: "response"
    })

  }

}
