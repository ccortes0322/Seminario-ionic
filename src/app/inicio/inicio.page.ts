import { Component} from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {

  slideropt = {
    initialSlide: 0, //el primer slider
    slidesPerView: 1,  //sline por vista
    centerSlides: true, // para que este centrado
    speed: 400 // tiempo de duracion
  } 

  slides = [
    {
      titulo1: "Biblioteca",
      titulo2: "Inicio",
      img: "/assets/img/inicio/slide1.png",
      description: "Ven, conoce nuevos mundos a través de la lectura"
    },
    {
      titulo1: "Biblioteca",
      titulo2: "Categorías",
      img: "/assets/img/inicio/slide2.png",
      description: "Conoce las distintas categorías y aventuras que tenemos para ti"
    },
    {
      titulo1: "Biblioteca",
      titulo2: "Reservas",
      img: "/assets/img/inicio/slide3.png",
      description: "Reserva tu libro con nosotros para que disfrutes de nuevas aventuras"
    },
    {
      titulo1: "Biblioteca",
      titulo2: "Nuevos mundos",
      img: "/assets/img/inicio/slide4.png",
      description: "Conoce nuestras otras historias 'Libros', te esperamos"
    }
  ]

  constructor() { }

 

}
