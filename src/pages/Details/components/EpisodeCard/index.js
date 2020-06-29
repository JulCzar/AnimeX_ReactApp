import React from 'react'
import { RectButton } from 'react-native-gesture-handler'
import { Episode, EpisodeName, EpisodeNameSeen, EpisodeSeen } from './styles'

/**
 * 
 * @param {{
 *   data: {
 *     id: Number,
 *     label: String
 *   },
 *   watchedList: Number[],
 *   onPress: () => void
 * }} param0 
 */
const EpisodeCard = ({data, watchedList, onPress}) => {
  const {id, label} = data
  
  return (
    <>
      {watchedList.includes(id)
      ?(
        <EpisodeSeen>
          <RectButton
            style={{width: '100%'}}
            onPress={onPress}
          >
            <EpisodeNameSeen>{label}</EpisodeNameSeen>
          </RectButton>
        </EpisodeSeen>
      )
      :(
        <Episode>
          <RectButton
            style={{width: '100%'}}
            onPress={onPress}
          >
            <EpisodeName>{label}</EpisodeName>
          </RectButton>
        </Episode>
      )}
    </>
  )
}

export default EpisodeCard