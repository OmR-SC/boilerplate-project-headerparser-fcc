const { Router } = require("express");
const { getClientInfo } = require("../../controllers/clientInfoController");

// Omar: Setting up the routes
const router = Router();

router.get("/whoami", getClientInfo);

module.exports = { router };
