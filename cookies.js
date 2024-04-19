const {authUser,verfiyUser} = require('./server');

const setTokenInCookie = (token) => {
    document.cookie = `jwtToken=${token}; path=./`
}

const getTokenFromCookie = () => {
    const cookies = document.cookie.split(';')
    for(let cookie of cookies){
        const [name, value] = cookie.trim().split('=');
        if(name === 'jwtToken'){
            return value;
        }
    }
    return null;
}

// Example
const username = 'Alicia';
const password = 'AL20';

console.log(`Attempting to authenticate user "${username}"...`);
const authToken = authUser(username, password);
if (authToken) {
    console.log('Authentication successful!');
    console.log('Generated JWT token:', authToken);
    
    // Set JWT token in a cookie
    setTokenCookie(authToken);
    
    // Retrieve JWT token from cookies
    const storedToken = getTokenFromCookie();
    console.log('Retrieved JWT token from cookie:', storedToken);
    
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
