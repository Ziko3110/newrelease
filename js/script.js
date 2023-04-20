"use strict";
/*const answer = [];
answer[0] = prompt ('name',' ');
answer[1] = prompt ('lastname','');
answer[2] = prompt ('how old are u','');

document.write(answer);
*/
let numberOfFilms = prompt('сколько фильмов вы уже посмотрели?','');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};
const answer1 = prompt( 'один из последних просмотренных фильмов?', ''),
    answer2 = prompt ('На сколько оцените его',''),
    answer3 = prompt( 'один из последних просмотренных фильмов?', ''),
    answer4 = prompt ('На сколько оцените его', '');

personalMovieDB.movies[answer1] = answer2;
personalMovieDB.genres[answer3] = answer4;

console.log(personalMovieDB);














/*a = 15;
console.log(a);


let number = 5;
const leftBorderWidth = 1;
number = 10;
console.log(number);

{
    var result = 50;
}
console.log(result);
/*


const storeName = 'kixx';
const storeDescription ={
    budget: 10000,
    employees: [ 'Ivan', 'Balvan','Baran' ],
    products: {
        'name': 1,
        'price': 103
    },
    
    open: true    
}
console.log(storeDescription['products']);*/