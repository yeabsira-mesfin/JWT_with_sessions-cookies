const jwt = require('jsonwebtoken');

// Secret Key
const secretKey = process.env.secretKey || 'default';

// Users

const Users = [
    {id:1, username: 'Alicia', password: 'AL20'},
    {id:2, username: 'Aron', password: 'AR23'}
];


// Authentication function

const authUser = (username, userid,password) => {
    // Check if the user exists.

    const user = Users.find(user => 
        user.username === username && user.id === userid
    );

    // Create the json.

    if(!user) {
        console.log("User doesn't exist");
        return null;
    }else {
        // create the token
        const token = jwt.sign({id:userid,username: username, password:password}, secretKey, {expiresIn: '1h'});
        return token;
    }
}

// Verifying function

const verfiyUser = (token) => {
    try {
        const decoded = jwt.verify(token,secretKey);
        return decoded;
    } catch(error) {
        return null
    }
}

module.exports = {
    authUser,
    verfiyUser,
}