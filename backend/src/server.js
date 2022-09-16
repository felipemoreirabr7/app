const express = require('express')
const nunjucks = require("nunjucks")

const db = require("./config/db")
const CreateController = require("./controllers/CreateController")


const { compare} = require("bcrypt")

const User = require("./models/user")
const Aula = require("./models/aula")
const methodOverride = require("method-override")
const app = express()

app.use(express.json())
app.use(express.static("public"))
app.set("view engine", "njk")
app.use(methodOverride("_method"))


nunjucks.configure("src/views", {
    express: app,
    autoescape: false,
    noCache: true
})

app.get("/", CreateController.createAula)

app.post("/create", CreateController.postAula)

app.post("/login", async (req, res)=>{
    

        const {user, password} = req.body

        const userData = await db.query(`SELECT * FROM users WHERE user1 = '${user}'`)

        if(!userData.rows[0]){
            // usuário não cadastrado
            console.log("usuário não cadastrado")
            return res.json({message: 0})
        }else{
            const passed = await compare(password, userData.rows[0].password)

            if(!passed){
                // senha errada
                console.log("senha errada")
                return res.json({message: 1})
                
            }else{
                // usuário logado
                console.log(" usuário logado")
                return res.json({message: 2})
            }
        }


    
})

app.post("/ponto", (req, res)=> {
    const {userName, IP} = req.body
    
    console.log(IP.ip)


    if(IP.ip == '138.118.103.39'){
        console.log("Presenca registrada")
        return res.json({ message: 1})
    }

    console.log("Não foi possivel registar a presença")
    return res.json({ message: 0})

    
})

app.post("/cadastro", (req, res) => {
    const data = req.body 
    const {name, user1, password} = req.body
    if(name == '' || user1 == '' || password == ''){
        return res.json({message: 0})
    }
    User.create(data)
    return res.json({message: 1})
})

app.post("/cadastro-horarios", (req, res) => {
    const data = req.body
    Aula.CreateHorario(data)
    return res.json({message: "Folha Cadastrada"})
})

app.post("/update", (req, res) => {
    const data = req.body
    Aula.update(data)
    return res.json({message: "Folha Cadastrada"})
})


app.listen(8000, ()=>{
    console.log("server is running")
})