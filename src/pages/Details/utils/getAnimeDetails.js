import api from '../../../services/api'

const getAnimeDetails = async (id, callback) => {
  const config = {
    params: {
      $filter: `Id eq ${id}`
    }
  }

  const { data: apiResponse } = await api.get('odata/Animesdb', config)
  
  const dataParsed = apiResponse.value.reduce((acc, data) => {
    const { Nome, Desc, Imagem, Ano, Status, Categoria } = data
    // const status = Status?'Em Andamento':'Completo'
    const tags = Categoria
      .split(',')
      .map(item => item.trim())
      .sort()

    acc = {
      name: Nome,
      desc: Desc,
      year: Ano,
      image: { uri: Imagem },
      // status,
      tags,
    }
    
    return acc
  }, {})
  
  callback(dataParsed)
}

export default getAnimeDetails