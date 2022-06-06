import { ProdutosModel } from "./ProdutosModel"

export class UsuariosModel{

    public id: number
    public nomeUsuario: string
    public emailUsuario: string
    public passwordUsuario: string
    public fotoUsuario: string
    public descricaoUsuario: string
    public tipoUsuario: string
    public produtos: ProdutosModel[]

}