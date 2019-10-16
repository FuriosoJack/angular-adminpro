import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/green-dark.css',
    tema: 'green-dark'
  };

  constructor( @Inject(DOCUMENT) private _document) { 
    this.cargarAjustes();

  }

  guardarAjustes()
  {
    console.log("Guardando ajustes en loc");
    localStorage.setItem('ajustes',JSON.stringify(this.ajustes));
  }

  cargarAjustes()
  {
    if( localStorage.getItem('ajustes') ){
      console.log("Cargando ajustes en loc");
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
    }else{
      console.log("Cargando ajustes por defecto");
    }

    this.aplicarTema(this.ajustes.tema);
  }

  aplicarTema(tema: string)
  {

    let url = `assets/css/colors/${tema}.css`;
    this._document.getElementById("tema").setAttribute('href',url);


    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;
    this.guardarAjustes();
  }


 
}
interface Ajustes{
  temaUrl: string;
  tema: string;
}
