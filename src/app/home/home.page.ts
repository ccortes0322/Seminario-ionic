import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    
  slideropt = {
     initialSlide: 0, //el primer slider
     slidesPerView: 1,  //sline por vista
     centerSlides: true, // para que este centrado
     speed: 400 // tiempo de duracion
  } 
    
  constructor() {}

}
