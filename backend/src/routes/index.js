const { createHealthRoutes } = require("./health-check-route/health-check.route")
const { createCatalogRoutes } = require("./sofia-van-flopper-route/sofia-van-flopper-route")

const createRoutes = (app) => {
  createHealthRoutes(app);
  createCatalogRoutes(app)
};

module.exports = {
  createRoutes,
}
