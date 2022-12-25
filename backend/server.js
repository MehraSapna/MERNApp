// require('dotenv').config({ path: 'ENV_FILENAME' });

const express=require('express')
const app=express()
const colors=require('colors')
const dotenv=require('dotenv').config()

const goalrouter=require('./routes/goalroutes')
const {errorHandler}=require('./middleware/error')
const connectDB=require('./config/db')

const port=process.env.PORT || 5000

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api/goals' , goalrouter)
app.use(errorHandler)
app.listen(port , ()=>console.log(`server started on port ${port}`))