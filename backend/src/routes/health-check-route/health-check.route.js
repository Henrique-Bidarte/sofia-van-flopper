const { ROUTER_ENDPOINTS, ROUTER } = require("../../constants")

const healthCheck = (req, res) => {
  res.send({
    status: "OK",
  })
}

const createHealthRoutes = (app) => {
  app.get(`${ROUTER.TESLA_MOTORS}${ROUTER_ENDPOINTS.HEALTH_CHECK}`, healthCheck)
}

module.exports = {
  createHealthRoutes,
}
