import api from '../../../services/api'

const getQualities = async (id, callback) => {
  const config = {
    params: { id }
  }
  const { data: apiResponse } = await api.get('api/episodioexes/links', config)

  const dataParsed = apiResponse.map(({Id, Nome, Endereco}) => ({
    value: Id,
    label: Nome,
    video: { uri: Endereco }
  }))

  callback(dataParsed)
}

export default getQualities