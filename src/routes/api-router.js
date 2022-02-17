const {
  getProvMap,
  getCityByProv,
  getProvDetail,
  getProvByIsland,
  getCityByIsland,
} = require("../controllers/controller");
const router = require("express-promise-router")();

//Province
router.route("/get-province-map").get(getProvMap);
router.route("/get-prov-detail").get(getProvDetail);
router.route("/get-prov-onIsland").get(getProvByIsland);

//City
router.route("/get-cities-map").get(getCityByProv);
router.route("/get-city-onIsland").get(getCityByIsland);

module.exports = router;
