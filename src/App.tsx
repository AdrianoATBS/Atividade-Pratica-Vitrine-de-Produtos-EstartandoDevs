//@ts-ignore
import { produtos } from "./dados_produtos";
import CardProduto from "./components/CardProduto";
import type { Produto } from "./components/CardProduto";

function App() {

  return (
    <div className="App">
      {produtos.map((produto: Produto) => (
        <CardProduto 
          key={produto.id}
          produto={produto}
        />
      ))}
    </div>
  )
}


export default App;
