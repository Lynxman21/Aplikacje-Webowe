//We have to install bcrypt and jsonwebtoken
const {User} = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//register
exports.registerUser = async (req,res) => {
    const {email,password} = req.body;
    try {
        //Password hashing
        const hashedPassword = await bcrypt.hash(password,10);
        const user = await User.create({email,password: hashedPassword});

        res.json({message: "User successfully registered", id: user.id});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

//login
exports.loginUser = async  (req,res) => {
    const {email,password} = req.body;

    try {
        //Is user exist
        const user = await User.findOne({where: {email}});
        if (!user) {
            return res.status(401).json({error: 'Invalid email or password'});
        }
        //password correct?
        const validPassword = await bcrypt.compare(password,user.password);
        if (!validPassword) {
            return res.status(401).json({error: 'Invalid email or password'});
        }
        //Token generating (safety)
        const token = jwt.sign({id: user.id}, 'secret_key',{expiresIn:'1h'});
        res.json({message: 'Login successful', token});
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};