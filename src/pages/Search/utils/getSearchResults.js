import api from '../../../services/api'
import parseOdataResponse from '../../../utils/parseOdataResponse'

const getSearchResults = async (search, callback) => {
  const config = {
    params: {
      $orderby: 'Nome',
      $filter: `substringof('${search}', Nome)`,
    }
  }
  const { data: apiResponse } = await api.get('odata/Animesdb', config)

  const parsedData = parseOdataResponse(apiResponse)

  callback(parsedData)
}

export default getSearchResults