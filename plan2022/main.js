// - Знайти та вивести довижину настипних стрінгових значень
// let strArr = ['hello world', 'lorem ipsum', 'javascript is cool'];
// const lengthStr = (array) => {
//     strArr.forEach((str,index) => {
//         console.log(`${index+1} str = ${str.length}`);
//     })
// };
// lengthStr(strArr);

// - Перевести до великого регістру наступні стрінгові значення
// let strArr = ['hello world', 'lorem ipsum', 'javascript is cool'];
// strArr.forEach((str) => {
//     console.log(str.toUpperCase());
// })

// - Перевести до нижнього регістру настипні стрінгові значення
// let upStrArr = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
// upStrArr.forEach((item) => {
//     console.log(item.toLowerCase());
// });

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// let trim = str.trim();
// console.log(trim);

// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// function stringToArray(sentence) {
//     return str.split(" ");
// }
// let arr = stringToArray(str); 
// console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let numArr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
// numArr.map((num) => {
//     let s = num.toString();
//     console.log(s, typeof s);
// })

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11, 21, 3];
// const sortNums = (arr, condition) => {
//     if (condition === "ascending") {
//         return arr.sort((n1, n2) => n1 - n2);
//     } else if (condition === "descending") {
//         return  arr.sort((n1, n2) => n2 - n1);
//     }
//     return "Chose  correct method";
// }
// console.log(sortNums(nums, 'ascending'));      // [3,11,21]
// console.log(sortNums(nums, 'descending'));     // [21,11,3]

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// let sort = coursesAndDurationArray.sort((obj1, obj2) => obj2.monthDuration - obj1.monthDuration);
// console.log(sort);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let filter = coursesAndDurationArray.filter(o => o.monthDuration > 5);
// console.log(filter);

// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }