const asyncHandler = require("express-async-handler");

const Goal = require("../model/goalModel");
const User = require("../model/userModel");

//desc Get goals
// route GET/api/goals
// access Private

const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();

  return res.status(200).json(goals);
});

//desc Create/Set goal
// route POST/api/goals
// access Private

const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const goal = await Goal.create({
    text: req.body.text,
  });
  return res.status(200).json(goal);
});

//desc Update goal
// route PUT/api/goals/:id
// access Private

const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }
  // Chech for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  //Make sure the logged in user matches de goal user

  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  return res.status(200).json(updatedGoal);
});

//desc Delete goal
// route DELETE/api/goals/:id
// access Private

const deleteGoal = asyncHandler(async (req, res) => {
  //const deletedGoal = await Goal.findByIdAndDelete(req.params.id);

  // video solution

  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }
  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await goal.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
