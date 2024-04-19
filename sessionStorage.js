const {authUser,verfiyUser} = require('./server');

// Function to store JWT token in session storage.

const storeTokenInSession = (token) => {
    sessionStorage.setItem('jwtToken',token);
};

// Function to get JWT token from session storage.

const getTokenFromSession = () => {
    return sessionStorage.getItem('jwtToken');
};

// Using exmpales.

const username = 'Alicia';
const password = 'AL20';
const id = 1;

console.log(`Attempting to authenticate user "${username}..."`);
const autUsr = authUser(username,id,password);
if(autUsr){
    console.log('Authentication successful!');
    console.log('Generated JWT token:',autUsr);

    // Store JWT token in session storage.
    storeTokenInSession(autUsr);

    const storedToken = getTokenFromSession();
    console.log('Retrived JWT token from session storage', storedToken)

    // Verify Token
    console.log('Verifying token...');
    const decoded = verfiyUser(autUsr);
    if(decoded) {
        console.log('Token is valid');
        console.log('Decoded token:', decoded);
    } else {
        console.log('Token is invalid or expired.')
    }
} else {
    console.log('Authentication failed. Invalid username or passsowrd')
}
