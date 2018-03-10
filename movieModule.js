const fs = require('fs');
const util = require('util');

const readJsonFile = util.promisify(fs.readFile);

//const jsonFile = readJsonFile('./movie.json', 'utf8');



/****************************************************************************** */
/**Prmise resolve the task and return result to readJsonFile1 , 
 * and this file exported to fileModule */
/****************************************************************************** */
const readJsonFile1 = () => {
    //Promise.all([jsonFile]).then(([data]) => {
    readJsonFile('./movie.json', 'utf8').then((data) => {

        const getRankMovies = rankingMovies(data, 4, 9);

        tagMovies(getRankMovies);

    }).catch((err) => { console.log('Error', err); })
};//.then((getRankMovies) => { tagMovies(getRankMovies) })

/****************************************************************************** */



/**
 * this function parse JSON file then filter on rating based and then convert this filtered
// data into JSON Format , and append filtered result into a file 
 * @param {json array} data 
 * @param {number} ratinglowerLimit 
 * @param {number} ratingUpperLimit 
 */
function rankingMovies(data, ratinglowerLimit, ratingUpperLimit) {

    const movieData = JSON.parse(data);

    console.log('Total Movies:', movieData.length);

    const ratingResult = movieData.filter(v => v.rating >= ratinglowerLimit && v.rating <= ratingUpperLimit);

    console.log('Filtered Movies without Tags', ratingResult.length);

    const convertedData = JSON.stringify(ratingResult, null, 2);

    fs.appendFile('./moviesWithoutTags.json', `${convertedData} \n`, () => { });

    return ratingResult;

}


/**
 * this function get data from rankingMovies function and then put [tag] attribute on the basis of 
 * movie ranking and then write in a json file  
 * @param {get jsonArray } getRankMovies 
 */

function tagMovies(getRankMovies) {
    const getTagMovies = getRankMovies.filter(movies => {

        if (movies.rating > 8.5) {
            movies['Tag:'] = 'Excellent';

        } else if (movies.rating >= 8) {
            movies['Tag:'] = 'V.Good';

        } else {
            movies['tag:'] = 'Good';

        } return movies;

    });

    console.log('Movies with Tags:', getTagMovies.length);

    const stringifyData = JSON.stringify(getTagMovies, null, 2);

    fs.writeFile('./tagMovies.json', `${stringifyData}`, () => { });

}




/* const movieData = () => {

    fs.readFile('./movie.json', 'utf8', (err, data) => {


        const movieData = JSON.parse(data);
        const ratingResult = movieData.filter(v => v.rating >= 7 && v.rating <= 7.1);
        let convertedData = JSON.stringify(ratingResult, null, 2);
        fs.appendFile('./veryGoodMovies.txt', `Total Movies: ${ratingResult.length} \n ${convertedData}`, (err, data) => {

            //console.log(data);

        });

    });
}
 */

module.exports.getmovieData = readJsonFile1;