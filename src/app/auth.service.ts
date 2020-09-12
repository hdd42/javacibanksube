import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user :BehaviorSubject<IUser> ;
  constructor(private http: HttpClient, @Inject('API') private api) {
    this.user = new BehaviorSubject<IUser>(null)
  }

  doLogin({username, password}): Promise<any> {
    this.logOut();
    //let url = `http://api.javaci.com/login`;
    let url = `${this.api}/login`;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: 'my-auth-token'
    });
    return this.http.post(url, {username, password}, {observe: 'response', headers})
      .toPromise()
      .then(res => {
        console.log('authorization', res.headers.get('Authorization'));
        let authToken = res.headers.get('Authorization');
        if (res.status == 200 && authToken) {
          localStorage.setItem('token', authToken);
          this.user.next({id:'123', name:'Recep Ivedik'})
          return {message: 'Login success', success: true};
        } else {
          return {message: res.body || 'Something went wrong!', success: false};
        }

      })
      .catch(error =>{
        return {message: error.message || 'Something went wrong!', success: false};
      })
  }

  logOut(){
    localStorage.removeItem("token")
    this.user.next(null);
  }

  getUser():Observable<IUser>  {
    return this.user.asObservable();
  }

  isLoggedIn():boolean{
    return !!localStorage.getItem('token');
  }

}

export interface IUser{
  id?:string,
  name?:string
}
