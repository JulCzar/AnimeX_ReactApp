import api from '../../../services/api'

/**
 * 
 * @param {{value: [{Id: Number, Nome: String}], 'odata.count': Number}} data 
 * @param {String} search 
 */
const parseApiData = (data, search) => {
  const { length: substringLength } = search

  const parsedData = data.value
    .map(({Id, Nome}) => ({
      id: Id,
      label: {
        prefix: Nome.substring(
          0,
          Nome
            .toLowerCase()
            .indexOf(search.toLowerCase())
        ),
        match: Nome.substring(
          Nome
            .toLowerCase()
            .indexOf(search.toLowerCase()),
          Nome
            .toLowerCase()
            .indexOf(search.toLowerCase()) + substringLength
        ),
        sufix: Nome.substring(
          Nome
            .toLowerCase()
            .indexOf(search.toLowerCase()) + substringLength,
          Nome.length
        )
      }
    }))
    .slice(0, 12)

  return {length: data["odata.count"], results: parsedData}
}

const loadSuggests = async (search, callback) => {
  const config  = {
    params: {
      $inlinecount: 'allpages',
      $orderby: 'Nome',
      $select: ['Id', 'Nome'].join(','),
      $filter: `substringof('${search}',Nome)`
    }
  }
  const { data: apiResponse } = await api
    .get('odata/Animesdb', config)

  const dataParsed = parseApiData(apiResponse, search)
    

  callback(dataParsed)
}

export default loadSuggests