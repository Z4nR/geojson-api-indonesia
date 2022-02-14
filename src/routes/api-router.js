const { getProvMap, getCityByProv } = require("../controllers/controller");
const router = require("express-promise-router")();

router.route("/get-province-map").get(getProvMap);

router.route("/get-cities-map?prov_id=:prov_id").get(getCityByProv);

module.exports = router;
