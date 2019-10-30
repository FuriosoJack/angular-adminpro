import { Component, OnInit } from '@angular/core';
declare function init_pluggins();
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_pluggins();
  }

}
