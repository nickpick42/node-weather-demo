const express = require("express")
const hbs = require("hbs")
const paths = require("path")
const app = express()
const view_dir = paths.join(__dirname,"/views")
const partials_dir = paths.join(__dirname,"/views/partials")
let utils = require("./utils/dogutil")
const port = process.env.PORT || 3000



hbs.registerPartials(partials_dir)
app.use(express.static(view_dir))
app.set("view engine","hbs")
app.set("views",view_dir)




let i =0 ;

app.get("/",(req,res)=>{

    let dogInfo = [];



    res.render("index",{
        dogInfo: dogInfo
    })

})


app.listen( port ,()=>{
    console.log("Listening on port 3000")
})