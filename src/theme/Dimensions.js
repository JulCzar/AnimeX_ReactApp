import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
/**
 * 
 * @param {Number} comparator 
 * @returns {(percentual: Number) => Number}
 */
const getPercentageOf = comparator => percentual => comparator * (percentual / 100)

export const vw = getPercentageOf(width)
export const vh = getPercentageOf(height)

export const vmin = num => Math.min(vw(num), vh(num))
export const vmax = num => Math.max(vw(num), vh(num))