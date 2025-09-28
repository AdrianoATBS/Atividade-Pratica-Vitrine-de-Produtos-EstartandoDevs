import React from "react";



export default function CardProduto({ produto }) {

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