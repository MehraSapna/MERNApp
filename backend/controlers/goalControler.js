const asyncHandler=require('express-async-handler')

const goal =require('../model/goalModal')
// @desc Get goals
// @route GET /api/goals
// @access private

const getgoals= asyncHandler(async (req , res)=>{
    const goals= await goal.find()

    res.status(200).json(goals)
})

// @desc set goals
// @route set /api/goals
// @access private

const setgoals= asyncHandler(async (req , res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
        // res.status(400).json({message:'Please add a text'})
    }
    const goals =await goal.create({
        text:req.body.text
    })
    res.status(200).json(goals)
})

// @desc update goals
// @route update /api/goals/:id
// @access private

const putgoals= asyncHandler(async (req , res)=>{
    const goals=await goal.findById(req.params.id)
    if(!goals){
        res.status(400)
        throw new Error('goal not found')
    }
    const updateGoal =await goal.findByIdAndUpdate(req.params.id , req.body , {new:true})
    res.status(200).json(updateGoal)
})

// @desc delete goals
// @route delete /api/goals/:id
// @access private

const deletegoals= asyncHandler(async (req , res)=>{
    const goals=await goal.findById(req.params.id)
    if(!goals){
        res.status(400)
        throw new Error('goal not found')
    }
   await goals.remove()
    res.status(200).json({id: req.params.id})
})


module.exports={
    getgoals,
    setgoals,
    putgoals,
    deletegoals
}