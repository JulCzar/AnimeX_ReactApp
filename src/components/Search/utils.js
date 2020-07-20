import api from '../../services/api'

/**
 * 
 * @param {String} str 
 * @param {String} match 
 */
const cropMatch = (str, match) => {
  const { length: matchLength } = match

  const strUppercase = str.toLocaleUpperCase()
  const matchUppercase = match.toLocaleUpperCase()
  const matchPosition = strUppercase.indexOf(matchUppercase)
  
  return {
    prefix: str.substring(
      0,
      matchPosition
    ),
    match: str.substring(
      matchPosition,
      matchPosition + matchLength
    ),
    sufix: str.substring(
      matchPosition + matchLength,
      strUppercase.length
    )
  }
}

/**
 * 
 * @param {{value: [{Id: Number, Nome: String}], 'odata.count': Number}} data 
 * @param {String} search 
 */
const parseApiData = (data, search) => {

  const parsedData = data.value
    .map(({Id, Nome}) => ({
      id: Id,
      label: cropMatch(Nome, search)
    }))
    .sort((a,b) => {
      const aLength = a.label.prefix.length
      const bLength = b.label.prefix.length
      return aLength - bLength
    })
    .slice(0, 12)

  return parsedData
}

export const loadSuggests = async (search, callback) => {
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