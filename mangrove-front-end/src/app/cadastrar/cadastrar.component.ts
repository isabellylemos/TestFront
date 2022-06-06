import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosModel } from '../model/UsuariosModel';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  usuarioModel: UsuariosModel = new UsuariosModel
  confirmarSenha: string
  tipUsuario: string

  constructor(
    private auth : AuthService,
    private router : Router
  ) {}
  ngOnInit() {
  window.scroll(0,0)
  }
  confirmaSenha(event: any){
    this.confirmarSenha = event.target.value
  }
  tipoDoUsuario(event: any){
    this.tipUsuario = event.target.value
  }
  cadastrar(){
    this.usuarioModel.tipoUsuario = this.tipUsuario
    if(this.usuarioModel.passwordUsuario != this.confirmarSenha){
      alert('As senhas estão incorretas.')
    } else{
      this.auth.cadastrar(this.usuarioModel).subscribe((resp: UsuariosModel)=> {
        this.usuarioModel=resp
        this.router.navigate(['/entrar'])
        alert('Usuário cadastrado com sucesso!')
      })     
    }
  }

}
