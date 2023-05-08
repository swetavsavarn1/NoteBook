
const app=require('express')()
app.get('/',(req,res)=>{
    res.status(200).send({"message":"welcome to Notebook"})

})
require('./util/dbConnection').connectionDB().then(()=>{
    app.listen(5010,()=>{
        console.log("server connected")
    })
}).catch((e)=>{
    console.log("something went wrong",e)
})