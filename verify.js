const jwt = require('jsonwebtoken');

const token = 'Enter the token';
const secret = 'secretkey';

try{
    const decode = jwt.verify(token,secret);
    console.log('Token is Valid: ',decode);
}
catch(err){
    console.log("Toke invalid or expired: ",err.message)
}