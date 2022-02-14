const {
  getProvMap,
  getCityByProv,
  getProvDetail,
} = require("../controllers/controller");
const router = require("express-promise-router")();

router.route("/get-province-map").get(getProvMap);

router.route("/get-cities-map").get(getCityByProv);

router.route("/get-prov-detail").get(getProvDetail);

module.exports = router;
