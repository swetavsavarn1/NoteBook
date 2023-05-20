
const app=require('express')()
app.use(require('body-parser').json())
const signUpLoginRouter = require('./Routes/signup')
const loginRouter = require('./Routes/login')
const notebookRouter = require('./Routes/notebook')
app.use(require('cors')())
app.use('/signup', signUpLoginRouter)
app.use('/login', loginRouter)
app.use('/notebook', notebookRouter)
require('./util/dbConnection').connectionDB().then(()=>{
    app.listen(5010,()=>{
        console.log("server connected")
    })
}).catch((e)=>{
    console.log("something went wrong",e)
})