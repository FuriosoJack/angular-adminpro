import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry,map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit,OnDestroy {


  subscription: Subscription;

  constructor() { 


    

    this.subscription = this.regresarObservable().subscribe(numero => {
      console.log("Subs",numero);
    },
    error => {
      console.log("Error", error);
    },
    () => {
      console.log("Obs termino");
    }
  );

  }

  ngOnInit() {
  }

  regresarObservable(): Observable<any>
  {

    const obs =  new Observable((observer: Subscriber<any>) => {

      let contador = 0;
      let intervalo = setInterval(() => {
        contador += 1;
        
        const salida = {
          valor: contador
        }
        observer.next(salida);

        /*if(contador === 3){
        //  clearInterval(intervalo);
          observer.complete();
        }*/


      },1000);
    }).pipe(
      retry(2)
    ).pipe(
      map(response => {
        return response.valor;
      }),
      filter((response,index) => {

        if((response % 2 === 1)){
          return true;
        }

        return false;
      })
    );

    return obs;
  }
  
  ngOnDestroy()
  {
    console.log("la pagina se va a cerrar");
    this.subscription.unsubscribe();
  }


}
