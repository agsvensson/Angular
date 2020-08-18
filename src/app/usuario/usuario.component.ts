import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public usuarios:Usuario[]
  
  constructor(private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.usuarios = this.usuarioService.listaUsuario()  // carrega a lista de usuário
  }

}
