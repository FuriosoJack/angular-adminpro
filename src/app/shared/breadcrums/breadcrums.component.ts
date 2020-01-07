import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter,map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styles: []
})
export class BreadcrumsComponent implements OnInit {


  titulo: string;

  constructor(private router:Router, private title: Title,private meta:Meta) { 
    
    this.getDataRoute().subscribe(e => {
      
      console.log(e);
      this.titulo = e.titulo;
      this.title.setTitle( this.titulo );

      const metaTag: MetaDefinition = {
        name: "descripcion",
        content: this.titulo
      }

      this.meta.updateTag(metaTag);
      
    });  

  }

  ngOnInit() {
  }

  getDataRoute()
  {

    return this.router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event:ActivationEnd) => event.snapshot.data )      
    );
  }

}
