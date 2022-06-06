import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioLoginModel } from '../model/UsuarioLoginModel';
import { Observable } from 'rxjs';
import { UsuariosModel } from '../model/UsuariosModel';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar( usuarioLoginModel: UsuarioLoginModel): Observable<UsuarioLoginModel>{
    return this.http.post<UsuarioLoginModel>('https://projetomangrove.herokuapp.com/usuarios/logar', usuarioLoginModel)

  }
  cadastrar(usuarioModel:UsuariosModel): Observable<UsuariosModel>{
    return this.http.post<UsuariosModel>('https://projetomangrove.herokuapp.com/usuarios/cadastrar', usuarioModel)
  }

  logado () {
    let ok: boolean = false;
    if (environment.tokenUsuario != '') {
      ok = true
    }
    return ok

  }
}
