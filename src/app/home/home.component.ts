import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public usuario:Usuario
  constructor(private UsuarioService:UsuarioService) { } // injeta o UsuarioService

  ngOnInit(): void {
    this.usuario = this.UsuarioService.getUsuario()
  }

}
