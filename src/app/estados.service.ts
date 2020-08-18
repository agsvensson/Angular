import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados"  // API do site do IBGE de estados

  constructor(private http: HttpClient) { }

  getEstados():Observable<any>{   // any é para retornar qualquer coisa.
    return this.http.get<any>(this.url);
  }

}
