const { getCatalog } = require("../../repository/sofia-van-flopper/sofia-van-flopper.repository")

const getCatalogUseCase = async ({ id }) => {

    const catalog = getCatalog(id)
    return catalog

}
module.exports = {
    getCatalogUseCase,
}