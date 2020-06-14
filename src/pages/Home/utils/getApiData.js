import api from '../../../services/api'

// Configs to get api data
const config = {
  params: {
    $orderby: 'Nome',
    $select: ['Id','Nome','Imagem'].join(','),
    $inlinecount: 'allpages'
  }
}

const parseApiData = data => {
  const {
    'odata.count': matchesCount,
    'odata.nextLink': nextPage,
    value: animeList
  } = data

  const parsedAnimeList = animeList.map(({Id, Nome, Imagem}) => ({
    id: Id,
    name: Nome,
    image: { uri: Imagem }
  }))

  return {
    results: matchesCount,
    list: parsedAnimeList,
    nextPage
  }
}

const getApiData = async callback => {
  const { data: apiRespose } = await api.get('odata/Animesdb', config)

  const dataParsed = parseApiData(apiRespose)

  callback(dataParsed.list)
}

export default getApiData