import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http:HttpClient) {

  }
  doLogin({username , password}):Promise<any>{
    //let url = `http://api.javaci.com/login`;
    let url = `http://localhost:3000/login`;
    let headers = new HttpHeaders({
      'Content-Type':  'application/json',
     // Authorization: 'my-auth-token'
    })
    return this.http.post(url, {username, password},{observe:'response', headers})
      .toPromise()
      .then(res =>{
        console.log("authorization",res.headers.get('Authorization'))
        console.log("connection",res.headers.get('connection'))
        console.log(res.headers.keys())
        return true
      })
  }
}
