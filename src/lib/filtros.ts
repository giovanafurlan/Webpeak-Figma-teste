import filtros from "../../meta/filtros.yml";

export type FiltroContent = {
  readonly slug: string;
  readonly name: string;
};

const filtroMap: { [key: string]: FiltroContent } = generateFiltroMap();

function generateFiltroMap(): { [key: string]: FiltroContent } {
  let result: { [key: string]: FiltroContent } = {};
  for (const filtro of filtros.filtros) {
    result[filtro.slug] = filtro;
  }
  return result;
}

export function getFiltro(slug: string) {
  return filtroMap[slug];
}

export function listFiltros(): FiltroContent[] {
  return filtros.filtros;
}
