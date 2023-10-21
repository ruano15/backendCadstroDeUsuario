const pool = require("../config/db")
const bcrypt = require('bcrypt-nodejs')


//Create a user
exports.createUser = async(req, res) => {
    try {
        const obterHash = (password, callback) => {
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(password, salt, null, (err, hash) => callback(hash))
        })}
        obterHash(req.body.password, hash => {
            const password = hash
            const name = req.body.name;
            const email = req.body.email;
            const newUser = pool.query(`INSERT INTO users (name, email, password) VALUES( $1, $2, $3);`, [name, email, password])
            res.json("User has been created")
        })
    } catch (err) {
        console.error(err.message)
    }
}

//Get all Users
exports.getAllUsers = async(req,res) => {
    try {
        const allUsers =  await pool.query("SELECT * FROM users;");
        res.json(allUsers.rows);
    } catch (err) {
        console.error(err.message)
    }
}

//Get One User
exports.getOneUser = async(req,res) => {
    try {
        const { id } = req.params;
        const oneUser =  await pool.query("SELECT * FROM users WHERE id = $1;", [id]);
        res.json(oneUser.rows[0]);
        
    } catch (err) {
        console.error(err.message)
    }
}

//Update a note
exports.updateOneUser = async(req, res) => {
    try {

        const {id} = req.params;
        const name = req.body.name

        const updatedUser = await pool.query("UPDATE users SET name = $1 WHERE id= $2;", [name, id]) 
        res.json("User has been updated")
    } catch (err) {
        console.error(err.message)
        
    }
};

//Delete a User
exports.deleteOneUser = async(req, res) => {
    try {
        const {id} = req.params;
        const deleteUser = await pool.query("DELETE FROM users WHERE id = $1;", [id]);
        res.json("User has been deleted");
    } catch (err) {
        console.error(err.message)
        
    }
}