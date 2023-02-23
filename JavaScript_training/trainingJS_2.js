                                //  ** Object **

// let user = new Object();                  
// let user = {};
                                             // варіанти створення об'єкта
// let user = {
//     name : 'Іван',
//     age : '33',
// };

// alert(user.name);
// alert(user.age);

// delete user.age;                                       // проста робота з об'єктом
// alert(user.age);

// user['like birds'] = true;
// alert(user['like birds']);
// delete user['like birds'];
// alert(user['like birds']);

// let key = prompt('що ви хочете знати про користувача?','name/age');
// alert(user[key]);                                                       // виклик значення через ключ

// let fruit = prompt('Які фрутки взяти з пакета?', '');
// let bag = {
//     [fruit] : 5,                                    // літеральна нотація для створення обчислювальної властивості
// };

// alert(bag.apple); // Якщо fruit = apple
    
// function makeUser() {
//     let name = prompt('name','');           // функція записує значення в об'єкт 
//     let age = prompt('age','');
//     return { 
//         name : name,                    // name,  можемо використовувати як звичайні
//         age : age,                     // age,    так і скорочені властивості разом
//     };
// }

// let user = makeUser();
// alert(user.name);
// alert(user.age);

// let user = {
//     name: "Petro",
//     age : 35,
//     admin : true,
// };

// let key = prompt('Введіть значення ключа, яке шукаєте', '');
// if (user[key] === undefined) {
//     alert( 'Такого ключа не існує');                    // -- Перевірка на існування властивості
// }  else {
//     alert(user[key]);
// } 


// if (user['name'] === undefined) {
//     alert( 'Такого ключа не існує');             // варіант на пряму          
// };

// alert(user.call);                                // -- Якщо властивість не існує - викидає undefined 

// for(let key in user){                             // перебір через  for..in
//     alert(key);                                 // перебираємо одну пару  ключ - значення за одну ітерацію 
//     alert(user[key]);                         // переходимо до наступної
// }
// alert("name" in user);
// alert("29" in user);                         // перевірка наявності данних значень      
// alert("age" in user);


    
            // Hometasks
    // #1
// let user = new Object; //or user = {};
// user.name = 'Іван';
// user.surname = 'Сміт';
// user.name = 'Петро';
// delete user.name;

    //#2
// function isEmpty(obj) {
//     for(let prop in obj) {
//         return false;
//     } 
    
//     return true;
// }     

    //#3
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// }

// let sum = 0;
// for(let valueSalaries in salaries) {
//     sum += salaries[valueSalaries];
// }
// if (salaries === undefined ){
//     alert(0);
// }

// alert(sum);


    //#4
// function multiplyNumeric(obj) {
//     for(let prop in obj) {
//         if(typeof obj[prop] === 'number'){
//             obj[prop] *= 2;
//         }
//     }
// }

// let menu = {
//     width: 200,
//     height: 300,
//     title: "Моє меню"
//   };

// alert(menu.width);

// multiplyNumeric(menu);

// alert(menu.width);

      
    // *Методи об'єкта*

// let user = {
//     name : 'Іван',
//     age : 29,
// };

// user.sayHi = function() {
//     alert('Привіт');                        // Оголошено як функційний вираз
// }                                           // Function Expression

// user.sayHi();

// function sayHi() {
//     alert('Паривіт');                       // Оголошено як функцію
// }                                           // Function Declaration 
                                            
// user.sayHi = sayHi;                         // потім додано в метод

// user['sayHi']();

    // ДЗ 
// №1  calculator
// let calculator = {
//     read() {
//         this.a = +prompt('a?', '');
//         this.b = +prompt('b?', '');
//     },
    
//     sum : function() {
//         return this.a + this.b;
//     },
    
//     mul() {
//         return this.a * this.b;
//     }
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

    // **МАСИВИ**
// let a = +prompt('number,please', '');
// let fruits = ['apple', a, 'melon',];
// alert(fruits[1]);
// alert(fruits.at(2));
// alert(fruits.at(-1));
// fruits[3] = function() { alert('Hello');}
// fruits[3]();

// let arr = [ 'Vasya', 'Kolya', 'Petro',];
// arr.push('Stepan');
// alert(arr);
// arr[arr.length] = 'Ed';
// alert(arr);

        //**  Перебір масиву через for..of
// let fruits = ['Melon', 'Apple', 'Orange'];

// for(let fruit of fruits) {
//     alert(fruit + 2);
// }

        // ** Особливість створення через тyw Array()
// let arr = new Array(4, 2, 4);

// console.log(arr[0]);
// console.log(arr.length);


// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];
// alert(typeof(matrix));
// if (typeof(matrix) == 'object') {
//     alert ( 'It is OBJECT')
// }; 

// alert(matrix[1][1]);
// alert(matrix[0][2]);
// alert(matrix[2][1]);


        // Hometasks about Array
// №1
// let styles = ["Jazz", "Blues"];
// console.log(styles);
// styles.push("Rock-n-Roll");
// console.log(styles);
// styles[Math.floor((styles.length - 1) / 2)] = "Classics";
// console.log(styles);
// alert(styles.shift());
// console.log(styles)
// styles.unshift("Rap", "Reggae");
// console.log(styles);


// №2

// let sumInput = function() {
    
//     let arr = [];

//     while (true) {
//         let number = prompt('Введіть число','');
        
//         if (number === "" || number === null || !isFinite(number)) break;

//         arr.push(+number);
//     }
    

//     let sum = 0;
//     for(let newArr of arr) {
//         sum += newArr;
//     }
//     return sum;
// }

// alert( sumInput() );


        // ** Методи масивів **
 // splice //

// let arr = ["I", "study", "JavaScript","right", "now",];
// arr.splice(1, 2);               // Видаляє поч з індекса [1] к-сть елементів (2) 
// alert(arr);

// arr.splice(0, 2, "let`s", "dance");   // Видаляє поч з індекса [1] к-сть елементів (2) і додає елементи
// alert(arr);

// let removed = arr.splice(0,2, "You", "know");   // Видаляє поч з індекса [1] к-сть елементів (2) і додає елементи
// alert(arr);                                     // + зберігає видалене значення у зміннк(тут - removed)
// alert(removed);

// arr.splice(3, 0, "777");            // Просто додає елемент без видалення, якщо другий параметр 0
// alert(arr);


 // slice //
// let arr = ["t", "e", "s", "t",];  // копіює по індесам (strt, end(end не включно))
// alert(arr.slice(0,));            // якщо один параметр то це - start і до кінця масиву 
// alert(arr.slice(-1));          // Дозволяє від'ємні індекси як і в інших методах


 // concat //
// let arr = [1, 2];
// alert(arr.concat([3, 4,], 5, 6));
// let arrayLike = {
//     0 : "something",
//     length : 1,
// };
// alert(arr.concat(arrayLike));
// let arrayLike = {
//     0 : "something",
//     1 : "objectos",
//     2 : "Petro",
//     [Symbol.isConcatSpreadable] : true,
//     length : 3,
// };
// alert(arr.concat(arrayLike));
 

 // forEach //
// ["Bilbo", "Gandalf", "Nazgul"].forEach(alert);

// let arr = ["Bilbo", "Gandalf", "Nazgul"];
// // arr.forEach(alert);
// arr.forEach((item, index, array) => {
//     alert(`${item} має позицію № ${index} в масиві ${array}`);
// });

        //** Пошук в масиві **//
// let array = [];
// console.log(array)
// alert(array.indexOf(0)); // 1
// alert(array.indexOf(false)); // 3
// alert(array.indexOf(null)); // -1

// alert(array.includes(4)); // true
// alert(array.includes(5)); // false

// const arr = [NaN];
// alert(arr.indexOf(NaN)); // -1 НЕПРАВИЛЬНО(бо NaN не працює з === )
// alert(arr.includes(NaN)); // true

// let users = [
//     {id : 1, name : "John", surname : "Vasil"},
//     {id : 2, name : "Ketty", surname : "Stefan"},
//     {id : 3, name : "Merry", surname : "Petr"},
// ];


 // find(fn) //
// let users = [
//     {id: 0, name: "Jhn"},
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"}
//   ];

// // let user = users.find(item => item.id == 3);
// // alert(user.name);
// // console.log(user);

//   // повертає масив перших двох користувачів
// let someUsers = users.filter(item => item.id > 4);
//   console.log(someUsers.length);


 // map //
// let fruits = [ "Kiwi", "Banana", "Mango", "Apple", ];

// let lenghts = fruits.map(item => item.length);
// alert(lenghts);
// console.log(lenghts);

        
 // sort() //
// function viewResult(x){
//         alert(x);
// }

// let arr = [1, 2, 15, 21, 3, 15, 657, 32, 7, 9, 2, 31];
// arr.sort();                      //Сортується за лексикографічним перебором
// viewResult(arr);
// arr.sort((a, b) => a - b);      // Сортується через функцію(задаємо параметри і повертаємо true&false)
// viewResult(arr);
// arr.sort((a, b) => b - a);      // Зворотнє сортування
// viewResult(arr);


 // reverse() //
// let arr = [1, 4, 6, 67, 1, 23];
// alert(arr.reverse());


  // split & join //
// let names = 'Вася, Петя, Маша';
// let arr = names.split(', ');
// alert(arr);
// console.log(arr);

// let arr = 'Вася, Коля, Степан, Іван'.split(', ',2);
// alert(arr);
// console.log(arr);

 // reduce //
// let arr = [1, 2, 3, 4, 5, 6];
// let result = arr.reduce((sum,current) => sum + current, 0);
// alert(result);

 // Array.isArray //
// alert(typeof{});
// alert(typeof[]);

// alert(Array.isArray({}));
// alert(Array.isArray([]));


// ДЗ по масивам //
// №1
// let arr = [5, 3, 8, 1];


    //Варіант без методу пребору масива filter(fn)
// function filterRange (arr, a, b) {
//     let newArr = [];
//     for(let number of arr) {
//         if (number >= a && number <= b ) {
//             newArr.push(number);
//         }
//     } 
//     return newArr;
// }

    // Варіант з методом filter(fn)
// function filterRange(arr, a, b){
//     return arr.filter(item => (item >= a && item <=b));
// }

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (відфільтровані значення)

// alert( arr ); // 5,3,8,1 (не змінюється)

// №2 
// function filterRangeInPlace(arr, a, b) {
//      for( let i = 0; i < arr.length; i++) {
//         let val = arr[i];
     
//         if ( val < a || val > b ) {
//         arr.splice(i, 1);
//         i--;
//         }
//      }
// }

// let arr = [5, 3, 8, 1, 18, 4, 22];
// alert(arr);
// filterRangeInPlace(arr, 2, 10);
// alert(arr);

// №3
// let arr = [5, 2, 1, -10, 8];

// arr.sort( (a, b) => b-a );

// alert( arr ); // 8, 5, 2, 1, -10

// №4
// let arr = ["HTML", "JavaScript", "CSS"];
// alert( arr );

// let sorted = copySorted(arr);
    // Мій варіант
// function copySorted(arr){
//     let newArr = arr.slice();
//     return newArr.sort();
// }

    // Відповідь книга
// function copySorted(arr) {
//     return arr.slice().sort();
// }

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без змін)

// #4
// let ivan = { name: "Іван", age: 25 };
// let petro = { name: "Петро", age: 30 };
// let mariya = { name: "Марія", age: 28 };

// let users = [ ivan, petro, mariya ];

// let names = users.map(item => item.name);

// alert( names );

//#5
// let ivan = { name: "Іван", surname: "Іванко", id: 1 };
// let petro = { name: "Петро", surname: "Петренко", id: 2 };
// let mariya = { name: "Марія", surname: "Мрійко", id: 3 };

// let users = [ ivan, petro, mariya ];

// let usersMapped = users.map(user => ({
//     fullName: `${user.name} ${user.surname}`,
//     id:user.id
// }));

// /*
// usersMapped = [
//   { fullName: "Іван Іванко", id: 1 },
//   { fullName: "Петро Петренко", id: 2 },
//   { fullName: "Марія Мрійко", id: 3 }
// ]
// */

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // Іван Іванко

//#6
// let ivan = { name: "Іван", age: 25 };
// let petro = { name: "Петро", age: 30 };
// let mariya = { name: "Марія", age: 28 };

// let arr = [ petro, ivan, mariya ];

// function sortByAge(arr) {
//     arr.sort((a, b) => a.age - b.age)
// } 

// sortByAge(arr);
// // now: [ivan, mariya, petro]
// alert(arr[0].name); // Іван
// alert(arr[1].name); // Марія
// alert(arr[2].name); // Петро

// function getMissingElement(superImportantArray){
//   const getLostNumber = (arr1, arr2) => arr1.filter(item => arr2.includes(item));
//   const a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//   const c = getLostNumber (a, superImportantArray)

//   console.log(c);
// }

// getMissingElement( [0,5,1,3,2,9,7,6,4]);

// function greet(name){  
//   if(name === "Johnny")
//     return "Hello, my love!";
//   return "Hello, " + name + "!";
// }

// greet("Jo");


// function basicOp(operation, value1, value2) {
//     if(operation === '+') {
//       console.log(value1 + value2);
//       return (value1 + value2);
//     } else if (operation === '-') {
//         console.log(value1 - value2);
//       return (value1 - value2);
//     } else if (operation === '*') {
//       console.log(value1 * value2);
//       return (value1 * value2);
//     } else if (operation === '/') {
//       console.log(value1 / value2);
//       return (value1 / value2);
//     }
//   }

//   basicOp('+', 4, 7);
//   basicOp('-', 15, 18);
//   basicOp('*', 5, 5);
//   basicOp('/', 49, 7);


 // DATA
//  let now = new Date();
//  alert(now);

// let Jan01_1970 = new Date(0);
// alert(Jan01_1970);
// let Jan03_1970 = new Date(48 * 3600 * 1000);
// alert(Jan03_1970);

// let date = new Date("2017-01-26");
// alert(date);
// alert(date.getTime());

// alert(new Date(2011, 10, 3, 17, 30, 2));

// let date = new Date();

// alert( date.getHours() );
// alert( date.getUTCHours() );

// alert( new Date().getTimezoneOffset() );

// let today = new Date();

// today.setMinutes(22);
// alert(today);
// today.setHours(0, 0, 0, 0);
// alert(today);

// let date = new Date(2016, 0, 2); // 2 січня 2016

// date.setDate(1); // встановити 1 день місяця
// alert( date );

// date.setDate(0); // мінімальний номер дня -- 1, тому передбачається, що це останній день попереднього місяця
// alert( date ); 


// let start = new Date();

// for(let i = 0; i < 10000000; i++) {
//     let doSomething = i * i * i;
// }

// let end = new Date();

// alert(`Цикл зайняв ${(end - start)}мсек` );

// let start = Date.now();

// for(let i = 0; i < 10000000; i++) {
//     let doSomething = i * i * i;
// }

// let end = Date.now();

// alert(`Цикл зайняв ${(end - start)}мсек`);          // Віднімемо цифри, а не дати  

// let date = new Date( Date.parse('2012-01-26T13:51:50.417-07:00') );

// alert(date);


// function diffSubtract(date1, date2) {
//     return date2 - date1;
//   }
  
//   function diffGetTime(date1, date2) {
//     return date2.getTime() - date1.getTime();
//   }
  
//   function bench(f) {
//     let date1 = new Date(0);
//     let date2 = new Date();
  
//     let start = Date.now();
//     for (let i = 0; i < 100000; i++) {
//         f(date1, date2);
//     }
//     return Date.now() - start;
//   }
  
//   alert( 'Час diffSubtract: ' + bench(diffSubtract) + 'мс' );
//   alert( 'Час diffGetTime: ' + bench(diffGetTime) + 'мс' );


// function diffSubtract(date1, date2) {
//   return date2 - date1;
// }

// function diffGetTime(date1, date2) {
//   return date2.getTime() - date1.getTime();
// }

// function bench(f) {
//   let date1 = new Date(0);
//   let date2 = new Date();

//   let start = Date.now();
//   for (let i = 0; i < 100000; i++) f(date1, date2);
//   return Date.now() - start;
// }

// let time1 = 0;
// let time2 = 0;

// // запустіть bench(diffSubtract) і bench(diffGetTime) кожен по 10 разів
// for (let i = 0; i < 10; i++) {
//   time1 += bench(diffSubtract);
//   time2 += bench(diffGetTime);
// }

// alert( 'Загальний час для diffSubtract: ' + time1 );
// alert( 'Загальний час для diffGetTime: ' + time2 );

// let date = new Date( Date.parse('2012-01-26T13:51:50.417-07:00') );

// alert(date);