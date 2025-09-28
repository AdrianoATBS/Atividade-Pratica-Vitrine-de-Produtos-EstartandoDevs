//@ts-ignore
import { produtos } from "./dados_produtos";
//@ts-ignore
import CardProduto from "./components/CardProduto"
import type { Produto } from "./types/produto.js";

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
