import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { PrimeNG } from 'primeng/config';
import { AuthComponent } from "./features/auth/auth.component";

@Component({
  imports: [RouterModule, AuthComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'frontend';
  constructor(private primeng: PrimeNG ,private router:Router) { }

  ngOnInit() {
    this.primeng.ripple.set(true);
    if(localStorage.getItem('user')){
      this.router.navigate(['dashboard'])
    }else{
      this.router.navigate(['auth']);
    }
  }

}
