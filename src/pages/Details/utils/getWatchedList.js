import * as Store from 'expo-secure-store';

const KEY = 'watchedList'

export const getWatchedList = async (animeId, callback) => {
  const watchedList = JSON.parse(await Store.getItemAsync(KEY)) || {}
  const animeProgress = watchedList[String(animeId)] || []

  callback(animeProgress)
}

export const updateWatchedProgress = async (animeId, episodeId, callback) => {
  const watchedList = JSON.parse(await Store.getItemAsync(KEY)) || {}
  const animeProgress = watchedList[String(animeId)] || []

  const newProgressList = new Set([...animeProgress, episodeId])

  const newWatchedList = {
    ...watchedList,
    [String(animeId)]: Array.from(newProgressList)
  }

  await Store.setItemAsync(KEY, JSON.stringify(newWatchedList))
  callback(Array.from(newProgressList))
}