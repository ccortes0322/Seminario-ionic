import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../services/library.service';
import { AuthorDetailModalPage } from '../author-detail-modal/author-detail-modal.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.page.html',
  styleUrls: ['./authors.page.scss'],
})
export class AuthorsPage implements OnInit {

  authors: any;
  
  constructor(
    private libraryService: LibraryService,
    private modalController: ModalController) { }

  ngOnInit() {
    this.libraryService.getAuthors().then( res => {
      this.authors = res;
      console.log(this.authors)
    })
  }

  authorDetailModal(){

  }

  async showDetailModal(author: any){
    const modal = await this.modalController.create({
      component: AuthorDetailModalPage,
      componentProps: {
        author: author
      }
    });
    return await modal.present();
  }

}
