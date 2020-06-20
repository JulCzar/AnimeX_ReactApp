const { default: api } = require("../../../services/api")

const getSearchResults = (search, callback) => {
  const config = {
    params: {
      $orderby: 'Nome',
      $filter: `substringof('${search}', Nome)`,
      $select: ['Id', 'Nome', 'Desc', 'Ano'].join(',')
    }
  }
  api.get('odata/Animesdb', config)
}