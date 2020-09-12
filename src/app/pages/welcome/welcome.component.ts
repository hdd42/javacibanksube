import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService, IUser} from '../../auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  $user:Observable<IUser>
  today;
  accountSummary =false;
  constructor(private authService:AuthService) {
  }
  ngOnInit() {
    this.$user = this.authService.getUser()
    this.today = new Date();
  }


}
