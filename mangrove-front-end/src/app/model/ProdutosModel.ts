import { CategoriaModel } from "./CategoriaModel"
import { UsuariosModel } from "./UsuariosModel"

export class ProdutosModel{

    public id: number
    public nomeProduto: string
    public descricaoProduto: string
    public fotoProduto: string
    public valorProduto: number
    public estoqueProduto: number
    public categoria: CategoriaModel
    public usuario: UsuariosModel

}