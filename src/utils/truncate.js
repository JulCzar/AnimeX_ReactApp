const truncate = (str, maxLength, sufix = '...') => {

  if (str.length > maxLength)
    return str.substring(0, maxLength) + sufix
    
  return str
}

export default truncate