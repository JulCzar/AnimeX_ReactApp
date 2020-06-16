import api from '../../../services/api'

const getReleases = async callback => {
  const { data: apiResponse } = await api.get('api/animes/lancamento')

  const dataParsed = apiResponse.map(({Id, Nome, Imagem}) => ({
    id: Id,
    name: Nome,
    image: { uri: Imagem }
  }))

  callback(dataParsed)
}

export default getReleases