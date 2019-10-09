import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progreso1: number;
  progreso2: number;
  constructor() {
    this.progreso1 = 70;
    this.progreso2 = 30;
  }

  ngOnInit() {
  }

  actualizar(event: number){
    console.log("Evento:" + event);
  }

}
