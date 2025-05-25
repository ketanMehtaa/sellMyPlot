import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-auth',
  imports: [CommonModule, CardModule, ReactiveFormsModule, InputTextModule, PasswordModule, ButtonModule, RouterModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  userProfileLogin = new FormGroup({

    name: new FormControl(''),
    password: new FormControl(''),

  })
  constructor(private router: Router) { }
  
  loginSubmit() {
    console.log(this.userProfileLogin.value);
    localStorage.setItem('user', JSON.stringify(this.userProfileLogin));
    this.router.navigate(['dashboard']);
  }
}
