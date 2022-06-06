import { ProdutosModel } from "./ProdutosModel"

export class CategoriaModel{

    public id: number
    public nomeCategoria: string
    public produtos: ProdutosModel[]

}