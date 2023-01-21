import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private storage: Storage) { }

  loginUser(credentials: any){
    return new Promise( async (accept, reject) =>{
      const validateUser = await this.storage.get("user") 
      console.log(validateUser)

      if ( credentials.email == validateUser.email && credentials.password == atob(validateUser.password))
      {
        accept("Login Exitoso");
      } else {
        reject("Login Fallido");
      }
    });
  }

  registerUser(userData: any){
    userData.password = btoa(userData.password);
    return this.storage.set("user", userData);
  }
}
