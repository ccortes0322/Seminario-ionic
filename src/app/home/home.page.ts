import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController,MenuController,ModalController  } from '@ionic/angular';
import { BooksModalPage } from '../books-modal/books-modal.page';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  authors: any;
  booksOff: any;

  slideOps = {
    initialSlide: 1,
    slidesPerView: 3,
    centeredSlides: true,
    speed: 400
  }
    

  constructor(
    private libraryService: LibraryService,
    private router: Router,
    private navControler: NavController,
    private menu: MenuController,
    private modalController: ModalController,
    ) {}

    

    ionViewDidEnter(){

    this.libraryService.getAuthors().then( res => {
        this.authors = res;
    })

      

    // this.booksOff = this.libraryService.getBooksOffline();
    //   console.log(this.booksOff.books);
    }   

  inicio(){
    this.router.navigateByUrl("/inicio")
  }
  login(){
    this.router.navigateByUrl("/login")
  }

  salir(){
    this.navControler.navigateRoot("/login");
  }

  actores(){
    this.router.navigateByUrl("/menu/authors")
  }
  libros(){
    this.router.navigateByUrl("/menu/books")
  }
  topTen(){
    this.router.navigateByUrl("/menu/top-ten")
  }
  favotitos(){
    this.router.navigateByUrl("/menu/favorite-books")
  }

  async showBooks(author:any) {
    const modal = await this.modalController.create({
      component: BooksModalPage,
      componentProps: {
        author: author
      }
    });
    return await modal.present();
  }
  

}
