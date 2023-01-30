import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController,MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(
    private router: Router,
    private navControler: NavController,
    private menu: MenuController,
    private storage: Storage,

  ) { }

  closeMenu(){
    this.menu.close();
  }
  salir(){
    this.storage.remove("user_id");
    this.storage.set("isUserLoggedIn", false ) 
    this.storage.set("sesion", false ) 
    this.navControler.navigateRoot("/login");
  }
  // login(){
  //   this.router.navigateByUrl("/login")
  // }
  inicio(){
    this.router.navigateByUrl("/menu/home");
    this.menu.close();
  }
  actores(){
    this.router.navigateByUrl("/menu/authors");
    this.menu.close();
  }
  libros(){
    this.router.navigateByUrl("/menu/books");
    this.menu.close();
  }
  favotitos(){
    this.router.navigateByUrl("/menu/favorite-books");
    this.menu.close();
  }
  ngOnInit() {
  }

}
