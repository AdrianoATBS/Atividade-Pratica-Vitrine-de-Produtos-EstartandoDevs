import React from "react";


export interface Produto {
  id: number;
  nome: string;
  preco: number;
  precoPromocional?: number;
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
            <div className={`card-produto ${produto.emEstoque? "" : 'esgotado'}`}>
                {produto.precoPromocional && <span className="selo-promocao">Promoção!</span>}

                <img src={produto.imagemUrl} alt={produto.nome} />
                <p className="categoria">{produto.categoria}</p>
                <h2>{produto.nome}</h2>

                <div className="precos">
                {produto.precoPromocional ?(
                    <div >
                        <p className="preco-antigo">{produto.preco}</p>
                        <p className="preco-novo">{produto.precoPromocional}</p>
                    </div>

                ): (
                    <p className="preco-novo">{produto.preco}</p>
                )}
                </div>
                
                <p>{produto.emEstoque ? "Em estoque" : "Esgotado"}</p>
                <button disabled={!produto.emEstoque}>{produto.emEstoque ? "Adicionar ao carrinho" : "Produto Esgotado"}</button>
            
            </div>

        </div>
    )
}