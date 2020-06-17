import api from "../../../services/api"

const getVideoQualities = async (id, callback) => {
  const config = {
    params: { id }
  }
  const { data: apiResponse } = await api.get('api/episodioexes/links', config)

  const dataParsed = apiResponse.map(({Id, Nome, Endereco}) => ({
    id: Id,
    label: Nome,
    video: { uri: Endereco }
  }))

  callback(dataParsed.map(({video}) => video)[0])
}

export default getVideoQualities