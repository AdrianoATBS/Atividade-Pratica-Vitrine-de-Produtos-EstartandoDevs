//@ts-ignore
import { produtos } from "./dados_produtos";
import CardProduto from "./components/CardProduto";
import type { Produto } from "./components/CardProduto";
import React from "react";

function App() {
    const [categoriaSelecionada, setCategoriaSelecionada] = React.useState<string>("Todos");
    const [ordenarPorPreco, setOrdenarPorPreco] = React.useState(false);
  return (
    <div className="app">
      <button onClick={() => setCategoriaSelecionada("Todos")}>Todos</button>
      <button onClick={() => setCategoriaSelecionada("Smartphones")}>Smartphones</button>
      <button onClick={() => setCategoriaSelecionada("Acessórios")}>Acessórios</button>
      <button onClick={() => setCategoriaSelecionada("Notebooks")}>Notebooks</button>
      <button onClick={() => setOrdenarPorPreco(!ordenarPorPreco)}>{ordenarPorPreco ? "Desordenar por preço" : "Ordenar por preço"}</button>
      {produtos.filter(produto => categoriaSelecionada === "Todos" || produto.categoria === categoriaSelecionada)
      .sort((a, b) => ordenarPorPreco ? a.preco - b.preco : 0)
      .map((produto: Produto) => (
        <CardProduto
          key={produto.id}
          produto={produto}
        />
      ))}
    </div>
  )
}


export default App;
