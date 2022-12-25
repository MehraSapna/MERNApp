const asyncHandler=require('express-async-handler')

// @desc Get goals
// @route GET /api/goals
// @access private

const getgoals= asyncHandler(async (req , res)=>{
    res.status(200).json({message:'get goals'})
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
    res.status(200).json({message:'set goals'})
})

// @desc update goals
// @route update /api/goals/:id
// @access private

const putgoals= asyncHandler(async (req , res)=>{
    res.status(200).json({message:'update goals'})
})

// @desc delete goals
// @route delete /api/goals/:id
// @access private

const deletegoals= asyncHandler(async (req , res)=>{
    res.status(200).json({message:'delete goals'})
})


module.exports={
    getgoals,
    setgoals,
    putgoals,
    deletegoals
}