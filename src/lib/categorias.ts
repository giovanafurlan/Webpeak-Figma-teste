import categorias from "../../meta/categorias.yml";

export type CategoriaContent = {
  readonly cate: string;
  readonly name: string;
};

const categoriaMap: { [key: string]: CategoriaContent } = generateCategoriaMap();

function generateCategoriaMap(): { [key: string]: CategoriaContent } {
  let result: { [key: string]: CategoriaContent } = {};
  for (const categoria of categorias.categorias) {
    result[categoria.cate] = categoria;
  }
  return result;
}

export function getCategoria(cate: string) {
  return categoriaMap[cate];
}

export function listCategorias(): CategoriaContent[] {
  return categorias.categorias;
}
