import parseOdataResponse from '../../../utils/parseOdataResponse'
import api from '../../../services/api'

const getApiData = async callback => {// Configs to get api data
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

export default getApiData