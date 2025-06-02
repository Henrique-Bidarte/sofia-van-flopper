const { ROUTER_ENDPOINTS, ROUTER } = require("../../constants")

const healthCheck = (req, res) => {
  res.send({
    status: "OK",
  })
}

const createHealthRoutes = (app) => {
  app.get(`${ROUTER.SOFIA_VAN_FLOPPER}${ROUTER_ENDPOINTS.HEALTH_CHECK}`, healthCheck)
}

module.exports = {
  createHealthRoutes,
}
