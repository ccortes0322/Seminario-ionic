import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-books-modal',
  templateUrl: './books-modal.page.html',
  styleUrls: ['./books-modal.page.scss'],
})
export class BooksModalPage implements OnInit {

  author: any;
  author_id: any;
  Boos_authors: any;

  constructor(
    private navParams: NavParams,
    private modalController: ModalController,
    private storage: Storage,
    private libraryService: LibraryService
  ) { }

  async ngOnInit() {  
    // this.author_id = await this.storage.get("author_id");
    this.author_id = this.navParams.get("author");
    console.log(this.author_id.id);
    this.libraryService.getBooksAuthor(this.author_id.id).then(Boos_authors => {
      this.Boos_authors = Boos_authors;
      console.log(this.Boos_authors);
    })
  }

  closeModal(){
    this.modalController.dismiss();
  }

  ionViewDidEnter() {
    this.author = this.navParams.get("author");
  }

  getBookAuthors(){

  }
}
