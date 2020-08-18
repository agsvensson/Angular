import { Component, OnInit } from '@angular/core';
import { EstadosService } from '../estados.service';

@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.css']
})
export class EstadosComponent implements OnInit {
  estados:any
  constructor(private estadosService:EstadosService) { } // aqui injeta o EstadosService

  ngOnInit(): void {
    this.estadosService.getEstados().subscribe(   // subscribe traz um resultado
      response => {
        this.estados = response
      }
    ) 
  }

}
