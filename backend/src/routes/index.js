const { createHealthRoutes } = require("./health-check-route/health-check.route")
const { createTeslaMotorsRoutes } = require("./tesla-motors-route/tesla-motors-route")

const createRoutes = (app) => {
  createHealthRoutes(app);
  createTeslaMotorsRoutes(app)
};

module.exports = {
  createRoutes,
}
