import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IntroGuard } from './guards/intro.guard';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule), canActivate: [IntroGuard]
  // }, /menu/home
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule) 
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule), canActivate: [IntroGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule), canActivate: [IntroGuard]
  },
  {
    path: 'authors',
    loadChildren: () => import('./authors/authors.module').then( m => m.AuthorsPageModule)
  },
  {
    path: 'books',
    loadChildren: () => import('./books/books.module').then( m => m.BooksPageModule)
  },
  {
    path: 'books-modal',
    loadChildren: () => import('./books-modal/books-modal.module').then( m => m.BooksModalPageModule)
  },
  {
    path: 'top-ten',
    loadChildren: () => import('./top-ten/top-ten.module').then( m => m.TopTenPageModule)
  },
  {
    path: 'book-detail-modal',
    loadChildren: () => import('./book-detail-modal/book-detail-modal.module').then( m => m.BookDetailModalPageModule)
  },
  {
    path: 'favorite-books',
    loadChildren: () => import('./favorite-books/favorite-books.module').then( m => m.FavoriteBooksPageModule)
  },
  {
    path: 'author-detail-modal',
    loadChildren: () => import('./author-detail-modal/author-detail-modal.module').then( m => m.AuthorDetailModalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
