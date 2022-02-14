const { getProvMap, getCityByProv } = require("../controllers/controller");
const router = require("express-promise-router")();

router.route("/get-province-map").get(getProvMap);

router.route("/get-cities-map").get(getCityByProv);

module.exports = router;
