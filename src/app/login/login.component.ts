import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;
  isLoading = false;
  submitForm(): void {
    this.isLoading =true;
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    console.log("This.Form : ", this.validateForm.value)
    this.authService.doLogin({username:this.validateForm.value.userName , password:this.validateForm.value.password})
      .then(res => {
        this.isLoading =false;
        console.log('Res => ', res);
      })
      .catch(err => {
        this.isLoading =false;
      })
  }

  constructor(private fb: FormBuilder, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

}
