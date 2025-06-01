const { DATABASE } = require('../../constants')
const { DataStore } = require('notarealdb')

const sofiaVanFlopper = new DataStore(DATABASE.NAME)
const catalogRepository = teslaMotors.collection(DATABASE.CATALOG)

const getCatalog = (id) => {
    return catalogRepository.get(id)
}

module.exports = {
    getCatalog,
}
