const { DATABASE } = require('../../constants')
const { DataStore } = require('notarealdb')

const sofiaVanFlopper = new DataStore(DATABASE.NAME)
const catalogRepository = sofiaVanFlopper.collection(DATABASE.CATALOG)

const getCatalog = (id) => {
    return catalogRepository.get(id)
}

module.exports = {
    getCatalog,
}
