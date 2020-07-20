import React from 'react'
import { Suggest, MatchResult } from './styles'

const HighlightMatch = ({ value }) => {
  const { prefix, match, sufix } = value
  return (
    <Suggest>
      {prefix}
      <MatchResult>
      {match}
      </MatchResult>
      {sufix}
    </Suggest>
  )
}

export default HighlightMatch