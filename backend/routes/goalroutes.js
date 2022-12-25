const express=require('express')

const router=express.Router()
const {getgoals, setgoals, putgoals, deletegoals} =require('../controlers/goalControler')

router.route('/').get(getgoals).post(setgoals)
router.route('/:id').put(putgoals).delete(deletegoals)

// router.get('/' , getgoals )
// router.post('/' , setgoals )

// router.put('/:id' ,putgoals)
// router.delete('/:id' ,deletegoals)
module.exports=router