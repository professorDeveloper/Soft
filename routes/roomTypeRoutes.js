const express = require("express");
const {getAllRoomTypes, addRoomType} = require("../controllers/roomTypeController");
const router = express.Router();
router.get("/roomTypes", getAllRoomTypes);
router.post("/roomTypes", addRoomType);

module.exports = router;