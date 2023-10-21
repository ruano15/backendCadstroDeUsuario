const express = require('express')
const app = express()
const userController = require("./database/controllers/userControler");


//Middleware
app.use(express.json())

//routes
app.post("/user/create", userController.createUser)
app.get("/users", userController.getAllUsers)
app.get("/user/:id", userController.getOneUser)
app.put("/user/update/:id", userController.updateOneUser)
app.delete("/user/delete/:id", userController.deleteOneUser)

//conection localhost
app.get('/', (req, res) => {res.status(200).send("Backend Online")})
app.listen(process.env.PORT, () => {console.log("Backend Online")})

