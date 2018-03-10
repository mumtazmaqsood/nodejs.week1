

//***************************************************************************************************************** */

const fs = require('fs');
const util = require('util');

const { name, getName1, getClass,validateData } = require('./fileModule.js');


//***************************************************************************************************************** */

//console.log(name);
//console.log(getName1.name);

//console.log(getClass.getAge());
//console.log(testName);



//***************************************************************************************************************** */



//***************************************************************************************************************** */
//Using promises  , 
//***************************************************************************************************************** */

const readFile = util.promisify(fs.readFile);

readFile('validation.json', 'utf8').then((data) => {
    
    validateData(data);
    
}).catch( (err) => {console.log('Error', err);});

//***************************************************************************************************************** */

//.then(getmovieData())























//Global variable in node js 
// __dirname, __filename, require, module, exports, console

//console.log(__dirname); //it will return current dir path
//console.log(__filename); // it will return file path 



/* 
fs.readFile('validation.json', 'utf8', (err, data) => {

    const userData = JSON.parse(data);

    if (userData.username === 'mumtaz' && userData.password === 'maqsood') {

        fs.appendFile('validation.txt', `Login: ${Date()} \n`, (err, data) => {
            console.log('Login history saved');
        });
    } else {
        fs.appendFile('validation.txt', `Try to hack: ${Date()} \n`, (err, data) => {
            console.log('Login history saved1');
        });
    }
}); */

