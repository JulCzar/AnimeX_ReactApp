const { default: api } = require("../../../services/api")

const getEpisodeList = async (id, callback) => {
  const { data: apiResponse } = await api
    .get(`api/episodioexes/${id}`)

  const parsedList = apiResponse
    .map(({ Id: id, Nome: label }) => ({ id, label }))

  callback(parsedList)
}

export default getEpisodeList