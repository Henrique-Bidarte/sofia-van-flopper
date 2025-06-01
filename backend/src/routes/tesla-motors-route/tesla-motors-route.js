const express = require("express")
const { post, get } = require("../_base.route")
const { teslaMotorsPostMessageUseCase, teslaMotorsGetMessageUseCase } = require("../../use-cases")
const { ROUTER, ROUTER_ENDPOINTS } = require("../../constants")

const teslaMotorsRouter = express.Router()

const createTeslaMotorsRoutes = (app) => {
  post({
    router: teslaMotorsRouter,
    path: ROUTER_ENDPOINTS.MESSAGE,
    useCase: teslaMotorsPostMessageUseCase,
  })

  get({
    router: teslaMotorsRouter,
    path: ROUTER_ENDPOINTS.MESSAGE,
    useCase: teslaMotorsGetMessageUseCase,
  })

  app.use(ROUTER.TESLA_MOTORS, teslaMotorsRouter)
};

module.exports = { createTeslaMotorsRoutes }
