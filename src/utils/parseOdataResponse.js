/**
 * 
 * @param {{
 *   'odata.count': Number,
 *   'odata.nextLink': String,
 *   value: {
 *     Id: Number,
 *     Nome: String,
 *     Imagem: String,
 *     Desc: String,
 *     Ano: String,
 *     Categoria: String
 *   }[]
 * }} data 
 */
const parseOdataResponse = data => {
  const {
    'odata.count': matchesCount,
    'odata.nextLink': nextPage,
    value: animeList
  } = data

  const parsedAnimeList = animeList.map(({Id, Nome, Imagem, Desc, Ano, Categoria = ''}) => ({
    id: Id,
    name: Nome,
    image: { uri: Imagem },
    desc: Desc,
    year: Ano,
    tags: Categoria.split(',').map(tag => tag.trim()).sort()
  }))

  return {
    results: matchesCount,
    list: parsedAnimeList,
    nextPage
  }
}

export default parseOdataResponse