// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скріпт при a, що дорівнює 1, 0, -3
// let x = +prompt("enter some number!");
// if (x !== 0) {
//     console.log("Вірно");
// } else {
//     console.log("Невірно");
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time = +prompt("Введіть числло від 0 до 59.");
// if (time >= 0 && time < 15) {
//     console.log("Перша частина!");
// } else if (time >= 15 && time < 30) {
//     console.log("Друга частина!");
// } else if (time >= 30 && time < 45) {
//     console.log("Третя частина!");
// } else if (time > 45 && time <= 59) {
//     console.log("Четверта частина!")
// } else {
//     console.log("Переконайтеся в правильності числа!!!");
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day = +prompt("Enter number from 1 to 31");
// if (day >  0  && day <= 11) {
//     console.log("First part!!!");
// } else if (day > 11 && day <= 21) {
//     console.log("Second part");
// } else if (21 < day && day <= 31) {
//     console.log("Third part!!");
// } else if (day < 0 || day > 31) {
//     console.log("Month have only 31 days!");
// } else {
//     console.log("Sorry something went wrong.");
// }

// Switch does work correct
// let day = +prompt("Enter number from 1 to 31");
// switch (day) {
//     case (day > 0 && day <= 11) :
//         console.log("First part!");
//         break;
//     case (day > 11 && day <= 21):
//         console.log("Second part!");
//         break;
//     case (day > 21 && day <= 31):
//         console.log("Third part!");
//         break;
//     case (day <= 0 || day > 31):
//         console.log("Month have only 31 days");
//         break;
//     default:
//         console.log("Something went wrong...");
// }

// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// let NumOfDay = +prompt("what number of day( from 1 to 7 )???")
// switch (NumOfDay) {
//     case 1 :
//         console.log("Monday");
//         break;
//     case 2 :
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4 :
//         console.log("Thursday");
//         break;
//     case 5 :
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Week have only 7 days!!!");
// }

// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
// let a = +prompt("Введіть число а.");
// let b = +prompt("Введіть число b.");
// if (a > b) {
//     console.log("Більшим числом є a = " + a);
// } else if (b > a) {
//     console.log("Більшим числом є b = " + b);
// } else if (a === b) {
//     console.log("Ці 2 числа є рівні!");
// } else {
//     console.log("Такого числа не існує, попробуйте ще раз!");
// }

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код який, за допомоги  оператора || буде присвоювати змінній х значення "default",
// якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
// let x = +prompt("???") + prompt("???") || "Default";
// console.log(x);



