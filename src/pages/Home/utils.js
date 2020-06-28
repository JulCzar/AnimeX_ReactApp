import parseOdataResponse from '../../utils/parseOdataResponse'
import api from '../../services/api'

export const getApiData = async callback => {// Configs to get api data
  const config = {
    params: {
      $orderby: 'Nome',
      $select: ['Id','Nome','Imagem'].join(','),
      $inlinecount: 'allpages'
    }
  }

  const { data: apiRespose } = await api.get('odata/Animesdb', config)

  const dataParsed = parseOdataResponse(apiRespose)

  callback(dataParsed.list)
}

export const getReleases = async callback => {
  const { data: apiResponse } = await api.get('api/animes/lancamento')

  const dataParsed = apiResponse.map(({Id, Nome, Imagem}) => ({
    id: Id,
    name: Nome,
    image: { uri: Imagem }
  }))

  callback(dataParsed)
}