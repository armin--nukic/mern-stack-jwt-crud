const express = require("express");
const router = express.Router();
const {
  getGoals,
  postGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getGoals).post(protect, postGoal);

//router.get('/', getGoals)
//router.post('/', postGoal)

router.route("/:id").put(protect, updateGoal).delete(protect, deleteGoal);

//router.put('/:id', updateGoal)
//router.delete('/:id', deleteGoal)

module.exports = router;
