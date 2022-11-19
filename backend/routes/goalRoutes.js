const express = require('express')
const router = express.Router()
const {
    getGoals, 
    postGoal,
    updateGoal, 
    deleteGoal
    } = require('../controllers/goalController')

router.route('/').get(getGoals).post(postGoal)

//router.get('/', getGoals)
//router.post('/', postGoal)

router.route('/:id').put(updateGoal).delete(deleteGoal)

//router.put('/:id', updateGoal)
//router.delete('/:id', deleteGoal)


module.exports = router