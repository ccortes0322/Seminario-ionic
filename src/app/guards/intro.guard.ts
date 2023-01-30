import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanActivate {
  constructor(private router: Router,private storage: Storage){}
  async canActivate(){
    return true;
   const isValidateSow = await this.storage.get('sesion');
    if(isValidateSow){
      return true;
    }else{
        this.router.navigateByUrl("/login");
        return false;
    }
  }

  
}
