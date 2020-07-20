import { useEffect, useState } from 'react'
import { Dimensions } from 'react-native'

/**
 * Split tags response to a sorted array
 * @param {String} tags tags to split
 */
const splitTags = tags => {
    const tagsArray = tags
        .split(',')
        .map(tag => tag.trim())
        .sort()
    return tagsArray
}

export const parseOdataResponse = data => {
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
    tags: splitTags(Categoria)
  }))

  return {
    results: matchesCount,
    list: parsedAnimeList,
    nextPage
  }
}

/**
 * 
 * @param {String} str 
 * @param {Number} maxLength 
 * @param {Number | String} sufix 
 */
export const truncate = (str, maxLength, sufix = '...') => {
  if (str.length > maxLength)
    return str.substring(0, maxLength).trim() + sufix
    
  return str
}

const isPortrait = () => {
  const dim = Dimensions.get('screen')
  return dim.height >= dim.width
}

export const useOrientation = () => {
  const [orientation, setOrientation] = useState(
    isPortrait() ? 'PORTRAIT' : 'LANDSCAPE'
  )

  useEffect(() => {
    const callback = () => setOrientation(isPortrait() ? 'PORTRAIT' : 'LANDSCAPE')

    Dimensions.addEventListener('change', callback)

    return () => {
      Dimensions.removeEventListener('change', callback)
    }
  }, [])

  return orientation
}