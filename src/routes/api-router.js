const {
  getProvMap,
  getCityByProv,
  getProvDetail,
  getProvByIsland,
  getCityByIsland,
  getCityMap,
} = require("../controllers/controller");
const router = require("express-promise-router")();

//Province
router.route("get-province-all").get(getProvMap);
router.route("get-prov-detail").get(getProvDetail);
router.route("get-prov-onIsland").get(getProvByIsland);

//City
router.route("get-cities-all").get(getCityMap);
router.route("get-cities-prov").get(getCityByProv);
router.route("get-city-onIsland").get(getCityByIsland);

module.exports = router;
