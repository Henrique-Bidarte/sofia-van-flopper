const express = require("express")
const { post, get } = require("../_base.route")
const { getCatalogUseCase } = require("../../use-cases")
const { ROUTER, ROUTER_ENDPOINTS } = require("../../constants")

const catalogRouter = express.Router()

const createCatalogRoutes = (app) => {
  get({
    router: catalogRouter,
    path: ROUTER_ENDPOINTS.CATALOG,
    useCase: getCatalogUseCase,
  })

  app.use(ROUTER.SOFIA_VAN_FLOPPER, catalogRouter)
};

module.exports = { createCatalogRoutes }
