/* 基礎編 */

// Q1

let nickname = 'おっきー';
let age = 27;

console.log('私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。');

// Q2

let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
console.log(`私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`);

// Q3

let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);

// Q4

let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);

// Q5

console.log((playerList[0].age + playerList[1].age + playerList[2].age) / 3);

// Q6

function sayHello() {
  console.log('Hello');
}

sayHello();

let sayWorld = function() {
  console.log('World');
}

sayWorld();

// Q7

user.birthday = '2000-09-27';

user.sayHello = function() {
  console.log('Hello！');
}

user.sayHello();

// Q8

let calc = {};

calc.add = function(x, y) {
  console.log(x + y);
}

calc.add(3, 4);

calc.subtract = function(x, y) {
  console.log(x - y);
}

calc.subtract(15, 5);

calc.multiply = function(x, y) {
  console.log(x * y);
}

calc.multiply(7, 7);

calc.divide = function(x, y) {
  console.log(x / y);
}

calc.divide(10, 2);

// Q9

function remainder(x, y) {
  return x % y;
}

console.log('5 を 3 で割った余りは ' + remainder(5, 3) + ' です。');

// Q10

// 変数xのスコープはfoo関数内でのみ有効であり、foo関数の外から変数xを参照することができないため。


/* 応用編 */

// Q1

console.log(Math.floor(Math.random()*10));

// Q2

function helloworld() {
  console.log('Hello World!');
}
setTimeout(helloworld, 3000);

// Q3

let num = 5;

if (num > 0) {
  console.log('num is greater than 0');
} else if (num < 0) {
  console.log('num is less than 0');
} else {
  console.log('num is 0');
}

// Q4

let numbers = [];

for (let i = 0; i < 100; i++) {
  numbers[i] = i;
}

console.log(numbers);

// Q5

let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let i = 0; i < mixed.length; i++) {
  if (typeof mixed[i] == 'number' && mixed[i] % 2 === 0) {
    console.log('even');
  } else if (typeof mixed[i] == 'number' && mixed[i] % 2 === 1) {
    console.log('odd');
  } else if (typeof mixed[i] != 'number') {
    console.log('not number');
  }
}