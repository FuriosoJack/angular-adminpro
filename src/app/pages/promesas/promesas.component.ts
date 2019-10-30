import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() { 
    let promesa = new Promise((resolve, reject) => {
      
      let contador = 0;
      let intervalo = setInterval(() => {
        
        contador += 1;

        console.log(contador);

        if(contador == 3){
          reject('Fallo');
          clearInterval(intervalo);
        }
      }, 1000);
    });


    promesa.then( () => {
        console.log('termino');
    })
    .catch( (e) => {
          console.error('error promesa', e);

    });
  }

  ngOnInit() {
  }

}
