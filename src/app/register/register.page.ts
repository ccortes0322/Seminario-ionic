import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators  } from '@angular/forms'
import { Router } from '@angular/router';
import { NavController,AlertController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm:  FormGroup;
  validation_message = {
    email: [
      { type: 'required', message: 'El Email es obligatorio' },
      { type: 'pattern', message: 'Tu email no es valido' },
    ],
    password: [
      { type: 'required', message: 'La contraseña es obligatorio' },
      { type: 'minlength', message: 'La compo debe tener minimo 5 caracteres' },
    ],
    name: [
      { type: 'required', message: 'los nombres son obligatorio' }
    ],
    last_name: [
      { type: 'required', message: 'Los apellidos son obligatorio' }
    ],
    document_number: [
      { type: 'required', message: 'El documento es obligatorio' }
    ],
    document_type: [
      { type: 'required', message: 'El tipo de documento es obligatorio' }
    ],
    career: [
      { type: 'required', message: 'la carrera es obligatoria' }
    ],
  };
  
  
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private navControler: NavController,
    private authenticate: AuthenticateService,
    private alertController: AlertController) {

      this.registerForm = this.formBuilder.group({
        name: new FormControl(),
        last_name: new FormControl(),
        document_type: new FormControl(),
        document_number: new FormControl(),
        career: new FormControl(),
        email: new FormControl(),
        password: new FormControl(
        )
      });

      this.registerForm = this.formBuilder.group({
        email: new FormControl(
          '',
          Validators.compose([
            Validators.required,
            Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
          ])
        ),
  
        password: new FormControl(
          '',
          Validators.compose([
            Validators.required, 
            Validators.minLength(5)
          ])
        ),
        name: new FormControl(
          '',
          Validators.compose([
            Validators.required, 
          ])
        ),
        last_name: new FormControl(
          '',
          Validators.compose([
            Validators.required, 
          ])
        ),
        document_number: new FormControl(
          '',
          Validators.compose([
            Validators.required, 
          ])
        ),
        document_type: new FormControl(
          '',
          Validators.compose([
            Validators.required, 
          ])
        ),
        career: new FormControl(
          '',
          Validators.compose([
            Validators.required, 
          ])
        ),
      });
      
    
    }

    Login2(){  
      this.router.navigateByUrl("/login");
    }

    registerUserlocal(register_form: any){
      console.log(register_form)
      this.authenticate.registerUserLocal(register_form).then(() => {
        this.navControler.navigateForward("/login");
      });
    }


    registerUser(register_form: any){
      console.log(register_form)
      this.authenticate.registerUser(register_form).then( res => {
        this.navControler.navigateForward("/login");
      }).catch(err => {
        this.presentAlert("Opps", "Hubo un error", err);
      })
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


  ngOnInit() {
  }

}
