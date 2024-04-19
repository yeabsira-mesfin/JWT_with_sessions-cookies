const {authUser,verfiyUser} = require('./server');

const storeTokenInLocalstorage = (token) => {
    localStorage.setItem('jwtToken', token);
};

const getTokenFromLocalstorage = () => {
    return localStorage.getItem('jwtToken');
}

// Exmpale

const username = 'Arron';
const password = 'AR23';

console.log(`Attempting to authenticate user "${username}"...`);
const authToken = authUser(username, password);
if (authToken) {
    console.log('Authentication successful!');
    console.log('Generated JWT token:', authToken);
    
    // Store JWT token in local storage
    storeTokenInLocalStorage(authToken);
    
    // Retrieve JWT token from local storage
    const storedToken = getTokenFromLocalStorage();
    console.log('Retrieved JWT token from local storage:', storedToken);
    
    // Verify token
    console.log('Verifying token...');
    const decodedToken = verifyToken(storedToken);
    if (decodedToken) {
        console.log('Token is valid.');
        console.log('Decoded token:', decodedToken);
    } else {
        console.log('Token is invalid or expired.');
    }
} else {
    console.log('Authentication failed. Invalid username or password.');
}