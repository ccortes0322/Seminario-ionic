import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    

  constructor(private router: Router) {}

  inicio(){
    this.router.navigateByUrl("/inicio")
  }
  login(){
    this.router.navigateByUrl("/login")
  }

}
