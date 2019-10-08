import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progreso: number;
  constructor() {
    this.progreso = 50;
  }

  ngOnInit() {
  }

  cambiarValor( valor:number )
  {
    
    let valorSuma  =  this.progreso + valor;
    if(valorSuma > 100 || valorSuma < 0){
      return;
    }
    this.progreso = valorSuma;
  }

}
