import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import { element } from 'protractor';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {


  @ViewChild('textProgres', {static: false}) textProgress: ElementRef;

  @Input() progreso: number;
  @Input() leyenda: string;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();
  constructor() { 

    this.progreso = 50;
    this.leyenda = "leyenda";
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
    this.cambioValor.emit(this.progreso);
    this.textProgress.nativeElement.focus();
  }

  onChange(newValue: number){
    
    
   
    console.log();
   
    let valorSuma  =  this.progreso + newValue;
    if(valorSuma > 100 ){
      this.progreso = 100;
    }
    if(valorSuma < 0){
      this.progreso = 0;
    }

    this.textProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);
  }


}
