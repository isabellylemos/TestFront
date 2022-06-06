import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLoginModel } from '../model/UsuarioLoginModel';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {
  usuarioLoginModel : UsuarioLoginModel = new UsuarioLoginModel

  constructor(
    private auth : AuthService,
    private router : Router
  ) { }

  ngOnInit(){
  window.scroll(0,0) 
  }

  entrar() {
    this.auth.entrar(this.usuarioLoginModel).subscribe({
        next: (resp: UsuarioLoginModel)=>{
        this.usuarioLoginModel = resp
        environment.tokenUsuario = this.usuarioLoginModel.tokenUsuario
        environment.nomeUsuario = this.usuarioLoginModel.nomeUsuario
        environment.fotoUsuario = this.usuarioLoginModel.fotoUsuario
        environment.id = this.usuarioLoginModel.id
        
        this.router.navigate(['/inicio'])
      },
      error: erro => {
        if(erro.status == 401) {
          alert('Atenção! Usuario ou senha incorretos.')
    
        }
      },
    });
  }
}
