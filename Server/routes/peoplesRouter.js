const express = require("express");
const router = express.Router();

const {
  getPeople,
  getAllPeople,
  createPeople,
  updatePeople,
  deletePeople,
} = require("../controller/peoplesController");

router.post("/peoples", createPeople);
router.get("/peoples", getPeople);
router.get("/peoples/:id", getAllPeople);
router.patch("/peoples/:id", updatePeople);
router.delete("/peoples/:id", deletePeople);

module.exports = router;
