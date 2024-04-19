const {authUser, verfiyUser} = require('./server');

// Using both authUser and verifyUser methods.

const name = 'user1';
const id = 1;

console.log(`Attempting to authenticate user ${name}`);
const authenticate = authUser(name,id);

if(authenticate) {
    console.log('Authentication successful!');
    console.log('Generated JWT token:', authenticate);

    // Verify token

    console.log('Verfying token...');
    const decoded = verfiyUser(authenticate)
    console.log('Decoded token:',decoded)
}else {
    console.log('Authentication failed, Invalid username or  password');
}