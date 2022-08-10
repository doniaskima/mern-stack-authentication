const express = require("express");
const router = express.Router();
const {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals,
} = require("../controllers/goalController");



router.route("/").get(getGoals).post(setGoals);
router.route("/:id").delete(deleteGoals).put(updateGoals);

module.exports = router;