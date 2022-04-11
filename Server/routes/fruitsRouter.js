const express = require("express");
const router = express.Router();

const {
  getFruit,
  getAllFruit,
  createFruit,
  updateFruit,
  deleteFruit,
} = require("../controller/fruitsController");

router.post("/peoples/:peopleId/fruits", createFruit);
router.get("/peoples/:peopleId/fruits", getAllFruit);
router.get("/peoples/:peopleId/fruits/:fruitId", getFruit);
router.patch("/peoples/:peopleId/fruits/:fruitId", updateFruit);
router.delete("/peoples/:peopleId/fruits/:fruitId", deleteFruit);

module.exports = router;
