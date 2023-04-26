const {
  getProvMap,
  getProvByIsland,
  getProvDetail,
  getCityMap,
  getCityByProv,
  getCityByIsland,
  getProvMapPage,
  getProvOnIslandPage,
  getCityMapPage,
  getCityByProvPage,
  getCityOnIslandPage,
} = require("../controllers/controller");
const router = require("express-promise-router")();

//TotalPage
router.route("/get-prov-page").get(getProvMapPage);
router.route("/get-prov-onIsland-page").get(getProvOnIslandPage); //query ?island={String}
router.route("/get-city-page").get(getCityMapPage);
router.route("/get-city-onIsland-page").get(getCityOnIslandPage); //query ?island={String}
router.route("/get-city-onProv-page").get(getCityByProvPage); //query ?prov_id={Int}

//Province
router.route("/get-province-all").get(getProvMap); //query ?page={Int}
router.route("/get-prov-detail").get(getProvDetail);
router.route("/get-prov-onIsland").get(getProvByIsland); //query ?island={String}&page={Int}

//City
router.route("/get-cities-all").get(getCityMap); //query ?page={Int}
router.route("/get-city-prov").get(getCityByProv); //query ?prov_id={Int}&page={Int}
router.route("/get-city-onIsland").get(getCityByIsland); //query ?island={String}&page={Int}

module.exports = router;
