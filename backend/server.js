const express=require('express')
const app=express()
const dotenv=require('dotenv')
const goalrouter=require('./routes/goalroutes')
const {errorHandler}=require('./middleware/error')

const port=process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api/goals' , goalrouter)
app.use(errorHandler)
app.listen(port , ()=>console.log(`server started on port ${port}`))