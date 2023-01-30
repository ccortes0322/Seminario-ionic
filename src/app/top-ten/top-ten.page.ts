import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-top-ten',
  templateUrl: './top-ten.page.html',
  styleUrls: ['./top-ten.page.scss'],
})
export class TopTenPage implements OnInit {

  TopTen: any;

  constructor(private libraryService: LibraryService) { }

  ngOnInit() {
    this.libraryService.getTopTen().then(TopTen => {
      this.TopTen = TopTen;
      console.log(this.TopTen)
    })
  }

}
