import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { NavController,AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  loginForm: FormGroup;
  validation_message = {
    email: [
      { type: 'required', message: 'El Email es obligatorio' },
      { type: 'pattern', message: 'Tu email no es valido' },
    ],
    password: [
      { type: 'required', message: 'La contraseña es obligatorio' },
      { type: 'minlength', message: 'La compo debe tener minimo 5 caracteres' },
    ],
  };

  errorMesaje: any;

  constructor(
    private formBuilder: FormBuilder,
    private authenticate: AuthenticateService,
    private navControler: NavController,
    private storage: Storage,
    private router: Router,
    private alertController: AlertController
  ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ])
      ),

      password: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ),
    });
  }

  ngOnInit() {}

  loginUserLocal(credentials: any) {
    console.log(credentials);
    this.authenticate
      .loginUserLocal(credentials)
      .then((res) => {
        this.errorMesaje = '';
        this.storage.set('isUserLoggedIn', true);
        this.navControler.navigateForward('/menu/home');
      })
      .catch((err) => {
        this.errorMesaje = err;
      });
  }

  resgiter() {
    this.router.navigateByUrl('/register');
  }


  loginUser(credentials: any) {
    console.log(credentials);
    this.authenticate.loginUser(credentials).then( (res: any) => {
      this.storage.set("isUserLoggedIn", true);
      this.storage.set("user_id", res.user.id);
      this.navControler.navigateForward("/inicio");
    }).catch(err => {
      this.presentAlert("Opps", "Hubo un error", err);
    });
  }

  async presentAlert(header: any, subHeader: any, message: any) {
    const alert = await this.alertController.create(
      {
        header: header,
        subHeader: subHeader,
        message: message,
        buttons: ['Ok']
      }
    );
    await alert.present();
  }
}
