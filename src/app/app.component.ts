import { Component } from '@angular/core';
import {AuthService, IUser} from './auth.service';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;
  myAccountLink = 'link';
  $user:Observable<IUser>
  constructor(private authService:AuthService, private router:Router) {
  }
  ngOnInit() {
    this.$user = this.authService.getUser()
  }

  logout() {
    this.authService.logOut();
    this.router.navigateByUrl('/login')
  }
}
