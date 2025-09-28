import React from "react";


export interface Produto {
  id: number;
  nome: string;
  preco: number;
  imagemUrl: string;
  categoria: string;
  emEstoque?: boolean; 
}

interface CardProdutoProps {
    produto: Produto;
}

export default function CardProduto({ produto }: CardProdutoProps) {

    return(
        <div>
            <div className="card-produto">
            <img src={produto.imagemUrl} alt={produto.nome}/>
            <p className="categoria">{produto.categoria}</p>
            <h2>{produto.nome}</h2>
            <p className="preco">{produto.preco}</p>
            <p className="estoque">{produto.emEstoque ? "Em estoque" : "Esgotado"}</p>
            </div>
        </div>
    )
}