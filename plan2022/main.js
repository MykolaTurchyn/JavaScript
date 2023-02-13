// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function sqr(a, b) {
//     return a * b;
// }
// console.log(sqr(2, 5));
//
// let sqr1 = (a, b) => a * b;
// console.log(sqr1(2, 5));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function sqr(r) {
//     return 3.14 * (r * r);
// }
// console.log(sqr(2));
//
// let sqr = (r) => 3.14 * (r * r);
// console.log(sqr(2));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function asd(h, r) {
//     return 2 * 3.14 * (h + r);
// }
// console.log(asd(5, 2));
//
// let asd1 = (h, r) => 2 * 3.14 * (h + r);
// console.log(asd1(5, 2));

// - створити функцію яка приймає масив та виводить кожен його елемент
// let arrOfUsers = [
//         {
//             id: 1,
//             name: "Leanne Graham",
//             username: "Bret",
//             email: "Sincere@april.biz"
//         },
//         {
//             id: 2,
//             name: "Ervin Howell",
//             username: "Antonette",
//             email: "Shanna@melissa.tv"
//         },
//         {
//             id: 3,
//             name: "Clementine Bauch",
//             username: "Samantha",
//             email: "Nathan@yesenia.net"
//         },
//         {
//             id: 4,
//             name: "Patricia Lebsack",
//             username: "Karianne",
//             email: "Julianne.OConner@kory.org"
//         },
//         {
//             id: 5,
//             name: "Chelsey Dietrich",
//             username: "Kamren",
//             email: "Lucio_Hettinger@annie.ca"
//         },
//         {
//             id: 6,
//             name: "Mrs. Dennis Schulist",
//             username: "Leopoldo_Corkery",
//             email: "Karley_Dach@jasper.info"
//         },
//         {
//             id: 7,
//             name: "Kurtis Weissnat",
//             username: "Elwyn.Skiles",
//             email: "Telly.Hoeger@billy.biz"
//         },
//         {
//             id: 8,
//             name: "Nicholas Runolfsdottir V",
//             username: "Maxime_Nienow",
//             email: "Sherwood@rosamond.me"
//         },
//         {
//             id: 9,
//             name: "Glenna Reichert",
//             username: "Delphine",
//             email: "Chaim_McDermott@dana.io"
//         },
//         {
//             id: 10,
//             name: "Clementina DuBuque",
//             username: "Moriah.Stanton",
//             email: "Rey.Padberg@karina.biz"
//         }
// ];
// function iterArray(array) {
//     for (const item of array) {
//         console.log(item);
//     }
// }
// iterArray(arrOfUsers);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let sentenceVisiolization = (text) => {
//     document.write(`<div><p>${text}</p></div>`)
// }
// sentenceVisiolization("hello world");

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function ulCreator(text) {
//     document.write(`<!--<div><ul>-->
// <!--<li>${text}</li>-->
// <!--<li>${text}</li>-->
// <!--<li>${text}</li>-->
// </ul></div>`);
// }
// ulCreator("bro");

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let arrOfUsers = [
//     {
//         id: 1,
//         name: "Leanne Graham",
//         username: "Bret",
//         email: "Sincere@april.biz"
//     },
//     {
//         id: 2,
//         name: "Ervin Howell",
//         username: "Antonette",
//         email: "Shanna@melissa.tv"
//     },
//     {
//         id: 3,
//         name: "Clementine Bauch",
//         username: "Samantha",
//         email: "Nathan@yesenia.net"
//     },
//     {
//         id: 4,
//         name: "Patricia Lebsack",
//         username: "Karianne",
//         email: "Julianne.OConner@kory.org"
//     },
//     {
//         id: 5,
//         name: "Chelsey Dietrich",
//         username: "Kamren",
//         email: "Lucio_Hettinger@annie.ca"
//     },
//     {
//         id: 6,
//         name: "Mrs. Dennis Schulist",
//         username: "Leopoldo_Corkery",
//         email: "Karley_Dach@jasper.info"
//     },
//     {
//         id: 7,
//         name: "Kurtis Weissnat",
//         username: "Elwyn.Skiles",
//         email: "Telly.Hoeger@billy.biz"
//     },
//     {
//         id: 8,
//         name: "Nicholas Runolfsdottir V",
//         username: "Maxime_Nienow",
//         email: "Sherwood@rosamond.me"
//     },
//     {
//         id: 9,
//         name: "Glenna Reichert",
//         username: "Delphine",
//         email: "Chaim_McDermott@dana.io"
//     },
//     {
//         id: 10,
//         name: "Clementina DuBuque",
//         username: "Moriah.Stanton",
//         email: "Rey.Padberg@karina.biz"
//     }
// ];
// function objToWeb(...array) {
//     for (const user of array) {
//         for (const item of user) {
//             document.write(`<div>
// <p>ID: ${item.id}</p>
// <p>Name: ${item.name}</p>
// <p>Username: ${item.username}</p>
// <p>Email: ${item.email}</p>
// </div>`);
        // }
    // }
// }
// objToWeb(arrOfUsers);

// - створити функцію яка повертає найменьше число з масиву

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// const sumInArr = (...numbers) => {
//     let res = 0;
//     for (const number of numbers) {
//         res += number;
//     }
//     return res;
// }
// console.log(sumInArr(1, 2, 3, 4));



















