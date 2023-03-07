// зробити файл users.html

// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
//отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)
let body = document.getElementsByTagName('body')[0];
let div = document.createElement('div');

// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
let fetchUsers = fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((value) => {
        for (const user of value) {
            let p = document.createElement('p');
            p.innerText =
                `ID: ${user.id},
             Name: ${user.name}`;

            let btn = document.createElement('button');
            btn.innerText = 'More info';

            btn.onclick = () => {
                localStorage.setItem('user', JSON.stringify(user));
                window.location.href = 'users.html';
            }
            p.appendChild(btn)
            div.appendChild(p);
        }
    })
body.appendChild(div)

//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)