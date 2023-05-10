
const app=require('express')()
app.use(require('body-parser').json())
const signUpLoginRouter = require('./Routes/signup')

app.use('/signup', signUpLoginRouter)
require('./util/dbConnection').connectionDB().then(()=>{
    app.listen(5010,()=>{
        console.log("server connected")
    })
}).catch((e)=>{
    console.log("something went wrong",e)
})