const express = require("express"); 
const userRoute = require('./src/routes/user.route')

const app = express()

const port = 3000
app.use("/", userRoute)
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))

