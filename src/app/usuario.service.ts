import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
// aqui eu crio um serviço para exibir o nome que está na classe do usuário, tanto na tela home quanto no usuário
export class UsuarioService {

  constructor() { }

  public getUsuario(): Usuario {
    let usuario = new Usuario()
    usuario.nome = "Arthur"
    usuario.email = "guimaraesarthur86@yahoo.com.br"

    return usuario
  }
  
  public listaUsuario():Usuario[] {   // array de objetos de usuário
    return [  
      {
        nome: "Arthur",
        email: "guimaraesarthur86@yahoo.com.br"
      },
  
      {
        nome: "Marie",
        email: "marie@dog.com.br"
      },
  
      {
        nome: "Piña",
        email: "pina@cat.com.br"
      },
  
      {
        nome: "Coisinha",
        email: "coisinha@inmemorian-dog.com.br"
      },
  ]
  }
    

}
