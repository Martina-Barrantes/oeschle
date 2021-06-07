import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  productos = [
    {
      id : 1,
      imagen : 'https://oechsle.vteximg.com.br/arquivos/ids/3204051-800-800/1805878_1.jpg?v=637508518584230000',
      precio : 200.22,
      marca : 'MARCA 1',
      titulo : 'titulo 1'
    },
    {
      id : 2,
      imagen : 'https://oechsle.vteximg.com.br/arquivos/ids/3204051-800-800/1805878_1.jpg?v=637508518584230000',
      precio : 212.22,
      marca : 'MARCA 2',
      titulo : 'titulo 2'
    },
    {
      id : 3,
      imagen : 'https://oechsle.vteximg.com.br/arquivos/ids/3204051-800-800/1805878_1.jpg?v=637508518584230000',
      precio : 212.22,
      marca : 'MARCA 3',
      titulo : 'titulo 3'
    }
  ]


}
