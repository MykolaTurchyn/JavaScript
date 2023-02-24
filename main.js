// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let users = [
//     new User(1, "Vasya", "Pupkin", "vasyapupkin@gmail.com", "094583953"),
//     new User(2, 'sasha', 'dudin', 'sahadyd@yahoo.com', '0395599385'),
//     new User(3, 'danya', 'popov', 'danyapop@jfkdf.ceo', '0974385399'),
//     new User(4, 'mihal', 'adsfd', 'asdeefe@gmail.com', '054697875'),
//     new User(5, 'misha', 'qwerty', 'qwerty@gmail.com', '354245356'),
//     new User(6, 'locke', 'rtghbgv', 'jgutn@gmail.com', '099469644'),
// ];
// console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// console.log(users.filter((user) => !(user.id % 2)));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// console.log(users.sort((a, b) => a.id - b.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// class Client {
//     constructor(id,name,surname,email,phone,order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = [...order];
//     }
// }

// створити пустий масив, наповнити його 10 об'єктами Client
// let clients = [
//     new Client(1, "vasya", "popov", 'popov@gmail.com', '3909837465859', ["apple", 'orange']),
//     new Client(2, "sasha", "didov", 'asd@gmail.com', '12345', ["apple", 'orange', 'banana']),
//     new Client(3, "petya", "selov", 'dfg@gmail.com', '56543', ["apple", 'orange', 'banana','tomato']),
//     new Client(4, "anna", "ninet", 'vbb@gmail.com', '05678378349', ["apple", 'orange', 'banana','peanapple']),
//     new Client(5, "dasha", "aunob", 'rtd@gmail.com', '0987', ["apple", 'orange', 'banana','mango', '']),
//     new Client(6, "locke", "gt", 'mkj@gmail.com', '843678', ["apple", 'orange', 'banana']),
//     new Client(7, "misha", "gbh", 'oid@gmail.com', '876545678', ["apple", 'orange', 'banana']),
//     new Client(8, "bob", "d fh", 'popjgjrov@gmail.com', '678765', ["apple", 'orange', 'banana','potato']),
//     new Client(9, "keite", "dgbh ", 'popkjfjov@gmail.com', '098765456', ["apple", 'orange', 'banana','kokos',"avocado"]),
//     new Client(10, "danya", "nomer", 'rovmg@gmail.com', '345678909', ["apple", 'orange', 'banana','k','r','lo'])
// ];
// console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// clients.sort((a,b) => { return a.order.length - b.order.length});

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями
// модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// function Car(model, producer, year, max_speed, capacity) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.max_speed = max_speed;
//     this.capacity = capacity;
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// this.drive = function () {
//     console.log(`їдемо зі швидкістю ${max_speed} на годину.`);
//     }
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// this.info = function () {
//     console.log(
//         `Model: ${this.model}, Producer: ${this.producer}, Year: ${this.year}, Max_speed: ${this.max_speed}, Capacity: ${this.capacity}`);
// }
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// this.increaseMaxSpeed = function (newSpeed) {
//     this.max_speed += newSpeed;
// }
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// this.changeYear = function (newYear){
//     this.year = newYear;
// }
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// this.addDriver = function () {
// }
// }
// let car = new Car('Q7', 'Audi', 2017, 330, 5.0);
// car.drive();
// car.info();
// car.increaseMaxSpeed(70);
// car.changeYear(2020);
// car.info();


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями
// модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//  class Car {
//     constructor(model, producer, year, max_speed, capacity) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.max_speed = max_speed;
//         this.capacity = capacity;
//     }
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//         drive = function () {
//             console.log(`їдемо зі швидкістю ${this.max_speed} на годину`);
//         };
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//         info = function () {
//             console.log(`Model: ${this.model}, Producer: ${this.producer}, Year: ${this.year}, Max_speed: ${this.max_speed}, Capacity: ${this.capacity}`);
//         }
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//         increaseMaxSpeed = function (newSpeed) {
//             this.max_speed += newSpeed;
//         }
// -- changeYear (newValue) - змінює рік випуску на значення newValue
//         changeYear = function (newYear) {
//             this.year = newYear;
//         }
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//         addDriver = function () {
//         }
// }
// let car = new Car('Q7', 'Audi', 2017, 330, 5.0);
// car.drive()
// car.increaseMaxSpeed(70);
// car.changeYear(2020);
// car.info();


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги.
// function Sinderella(name, age, shoes_size) {
//     this.name = name;
//     this.age = age;
//     this.shoes_size = shoes_size;
// }

// Створити масив з 10 попелюшок.
// let arrSinder = [
//     new Sinderella('Anna', 18, 37),
//     new Sinderella('Katya', 16, 35),
//     new Sinderella('Olya', 17, 33),
//     new Sinderella('Diana', 18, 31),
//     new Sinderella('Karina', 19, 36),
//     new Sinderella('Ira', 21, 34),
//     new Sinderella('Mia', 23, 37),
//     new Sinderella('Nastya', 21, 39),
//     new Sinderella('Sasha', 27, 38),
// ]
// console.log(arrSinder);
//
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// class Prince {
//     constructor(name, age, search) {
//         this.name = name;
//         this.age = age;
//         this.search = search;
//     }
// }
// let prince = new Prince('Ira', 21, 34);
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// arrSinder.forEach((sinderella) => {
//     if (sinderella.name === prince.name && sinderella.age === prince.age && sinderella.shoes_size === prince.search) {
//         console.log(sinderella);
//     }
//     return false
// })

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку