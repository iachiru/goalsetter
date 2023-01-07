const asyncHandler = require("express-async-handler");

//desc Get goals
// route GET/api/goals
// access Private

const getGoals = asyncHandler(async (req, res) => {
  return res.status(200).json({ messge: "Get goals" });
});

//desc Create/Set goal
// route POST/api/goals
// access Private

const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  return res.status(200).json({ messge: "Set goals" });
});

//desc Update goal
// route PUT/api/goals/:id
// access Private

const updateGoal = asyncHandler(async (req, res) => {
  return res.status(200).json({ messge: `Update goal ${req.params.id}` });
});

//desc Delete goal
// route DELETE/api/goals/:id
// access Private

const deleteGoal = asyncHandler(async (req, res) => {
  return res.status(200).json({ messge: `Delete goal ${req.params.id}` });
});

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
