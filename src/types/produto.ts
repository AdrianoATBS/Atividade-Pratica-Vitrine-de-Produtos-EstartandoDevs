
export interface Produto {
  id: number;
  nome: string;
  preco: number;
  imagemUrl: string;
  categoria: string;
  emEstoque?: boolean; 
}