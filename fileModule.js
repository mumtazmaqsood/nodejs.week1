



const fs = require('fs');
const { getmovieData } = require('./movieModule.js');

//***************************************************************************************************************** */
const name = 'Mumtaz Maqsood';

const name1 = {
    name: 'Fadia Shafiq',
    age: '35'

}
//***************************************************************************************************************** */




//***************************************************************************************************************** */
// Declaring class and it has two methods 
//***************************************************************************************************************** */
class personData {
    constructor() {
        this.name = 'GUl Andam';
        this.age = 7;
    }

    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}


const p = new personData;
//***************************************************************************************************************** */




//***************************************************************************************************************** */
// Reading & validation username and make log
//***************************************************************************************************************** */

function validateData(data) {

    const userData = JSON.parse(data);

    userValidation(userData, 'mumtaz', 'maqsood');
}


/**
 * this function find the username & password in validation.json file 
 * if result found true, logHistory.txt file appended getmovieData() called
 * else only logHistory.txt file appended  
 * @param {array} userData 
 * @param {string} username 
 * @param {string} password 
 */
function userValidation(userData, username, password) {


    const result = userData.find(data => {

        return (data.username === username && data.password === password)
    });

    if (result) {

        fs.appendFile('logHistory.txt', `Login: ${Date()} \n`, () => {

            console.log('Login History saved');
        });

        getmovieData();

    } else {

        fs.appendFile('logHistory.txt', `Try to hack: ${Date()} \n`, () => {

            console.log('Login history saved1');

        });
    }
}



//***************************************************************************************************************** */

/* module.exports.getName = name; 
module.exports.getName1 = name1;
module.exports.getClass = p; */

module.exports = {
    name: name,
    getName1: name1,
    getClass: p,
    validateData: validateData

};