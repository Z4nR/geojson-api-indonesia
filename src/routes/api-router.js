const {
  getProvMap,
  getProvByIsland,
  getProvDetail,
  getCityByProv,
  getProvMapPage,
  getProvOnIslandPage,
  getCityByProvPage,
} = require("../controllers/controller");
const {
  validatePage,
  schema,
  validateProvId,
  validateIsland,
  validateIslandPage,
  validateProvPage,
} = require("../helpers/route-helpers");
const router = require("express-promise-router")();

//TotalPage
router.route("/get-prov-page").get(getProvMapPage);
router
  .route("/get-prov-onIsland-page")
  .get(validateIsland(schema.island, "island"), getProvOnIslandPage); //query ?island={String}
router
  .route("/get-city-prov-page")
  .get(validateProvId(schema.prov_id, "prov_id"), getCityByProvPage); //query ?prov_id={Int}

//Province
router
  .route("/get-province-all")
  .get(validatePage(schema.page, "page"), getProvMap); //query ?page={Int}
router
  .route("/get-prov-detail")
  .get(validateProvId(schema.prov_id, "prov_id"), getProvDetail);
router
  .route("/get-prov-onIsland")
  .get(
    validateIslandPage(schema.islandPage, "island", "page"),
    getProvByIsland
  ); //query ?island={String}&page={Int}

//City
router
  .route("/get-city-prov")
  .get(validateProvPage(schema.provPage, "prov_id", "page"), getCityByProv); //query ?prov_id={Int}&page={Int}

module.exports = router;
