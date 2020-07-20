import React from 'react'
import { default as Select } from 'react-native-picker-select'
import { TouchableWithoutFeedback, TouchableOpacity } from 'react-native-gesture-handler'
import { LoadingIndicator } from '../../../../components'
import { ModalBox, ModalView, OpenVideo } from './styles'

const QualitiesModal = ({isVisible, episode, openVideo, ...rest}) => {
  return (
    <Modal {...rest}>
      {!isVisible
      ?<LoadingIndicator/>
      :<TouchableWithoutFeedback onPress={() => setQualities(false)}>
        <ModalView >
          <ModalBox>
            <TouchableWithoutFeedback onPress={evt => evt.stopPropagation()}>
              <Select
                onValueChange={val => setEpisode(val)}
                placeholder={{label: 'Escolha a qualidade', value: null}}
                value={episode}
                items={qualities}
              />
            </TouchableWithoutFeedback>
            <TouchableOpacity onPress={openVideo}>
              {episode && <OpenVideo>Abrir Video</OpenVideo>}
            </TouchableOpacity>
          </ModalBox>
        </ModalView>
      </TouchableWithoutFeedback>}
    </Modal>
  )
}

export default QualitiesModal