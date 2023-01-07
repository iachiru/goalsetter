//desc Get goals
// route GET/api/goals
// access Private

const getGoals = (req, res) => {
  return res.status(200).json({ messge: "Get goals" });
};

//desc Create/Set goal
// route POST/api/goals
// access Private

const setGoal = (req, res) => {
  return res.status(200).json({ messge: "Set goals" });
};

//desc Update goal
// route PUT/api/goals/:id
// access Private

const updateGoal = (req, res) => {
  return res.status(200).json({ messge: `Update goal ${req.params.id}` });
};

//desc Delete goal
// route DELETE/api/goals/:id
// access Private

const deleteGoal = (req, res) => {
  return res.status(200).json({ messge: `Delete goal ${req.params.id}` });
};

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
