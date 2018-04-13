const bcrypt = require('bcrypt');
var pass="123";
//var hashpass;
let hash = bcrypt.hashSync(pass, 10);
console.log(hash);

if(bcrypt.compareSync("123", hash)) {
 console.log('password match');
} else {
console.log('Passwords dont match');
}

