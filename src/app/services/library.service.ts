import { Injectable } from '@angular/core';
//import * as booksOffline from "./books.json";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  urlServer = "https://librarypca.fly.dev/";
  httpHeaders = { headers: new HttpHeaders({"Content-Type": "application/json"}) };

  constructor(private http: HttpClient) { }

  getAuthors() {
    return fetch("https://librarypca.fly.dev/authors").then(
      response => response.json()
    );
  }

  getBooks(){
    return fetch("https://librarypca.fly.dev/books").then(
      allBooks => allBooks.json()
    );
  }

  getFabotiteBooks(){
    return fetch("https://librarypca.fly.dev/favorite_books").then(
      allFaboriteBooks => allFaboriteBooks.json()
    );
  }

  getTopTen(){
    return fetch("https://librarypca.fly.dev/top_books").then(
      TopTen => TopTen.json()
    );
  }

  getBooksAuthor(author_id:any){
    return fetch(`${this.urlServer}books_authors?author_id=${author_id}`).then(
      books => books.json()
    )
  }

  getCheckLikeBook(user_id: any, book_id: any){
    return this.http.get(`${this.urlServer}check_favorite?user_id=${user_id}&book_id=${book_id}`)
  }
  
  likeBook(user_id: any, book_id: any){
    let params = {
      "favorite_book": {
        "user_id": user_id,
        "book_id": book_id
      }
    }
    return this.http.post(`${this.urlServer}favorite_books`,params, this.httpHeaders)
  }

  disLike(user_id: any, book_id: any){
    let params = {
      "favorite_book": {
        "user_id": user_id,
        "book_id": book_id
      }
    }
    return this.http.post(`${this.urlServer}dislike`, params, this.httpHeaders)
  }

  getMyFavoriteBooks(user_id: any){
    return this.http.get(`${this.urlServer}my_favorite_books?user_id=${user_id}`)
  }

  getAuthorsDetails(author_id: any){
    return fetch(`${this.urlServer}books_authors?author_id=${author_id}`).then(
      books => books.json()
    )
  }
  // getBooksOffline() {
  //   return booksOffline;
  // }
}
