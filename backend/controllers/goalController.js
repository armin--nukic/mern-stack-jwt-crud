const asyncHandler = require('express-async-handler')

// @desc Get goals
// @route Get /apit/goals
// @access Private

const getGoals = asyncHandler(async (req, res) => {
    
    res.status(200).json({message: 'Get goals'})
})

// @desc Set goals
// @route POST /apit/goals
// @access Private

const postGoal = asyncHandler(async (req, res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message: 'Set goals'})
})

// @desc Update goal
// @route PUT /apit/goals/:id
// @access Private

const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
})

// @desc Delete goal
// @route DELETE /apit/goals/:id
// @access Private

const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
})

module.exports = {
    getGoals, postGoal, updateGoal, deleteGoal
}