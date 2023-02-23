// // 1. Проверить является ли число круглым 
// // 2. Получить у пользователя два числа и узнать остаток от деления первого на второе
// // 3. Получить у пользователя строку и узнать ее длину
// // 4. Получить у пользователя два числа и назвать наибольшее
// // 5. Получить у пользователя число и сказать входит ли оно в диаппазон от 30 до 50
// // 6. Для доступа на сайт нужно ввести логин и пароль.
// //    На сайте зарегистрировано четыре пользователя с паролями.
// //    Получите у пользователя логин и пароль и скажите имеет ли он доступ на сайт



// // 6 //

// function hasAccess (login, password ) {
//     const user1 = 'Kolya';
//     const pass1 = 'superb';

//     const user2 = 'Edik';
//     const pass2 = 'wertp';

//     const user3 = 'Alina';
//     const pass3 = 'audiopsa';

//     const user4 = 'Andrey';
//     const pass4 = 'yyyoods';

//     function isUser (user, pass){
//         return ( login === user && password === pass )
//     }

//     return isUser(user1, pass1)
//         || isUser(user2, pass2 )
//         || isUser(user3, pass3 )
//         || isUser(user4, pass4 );
// }

// console.log ( 'hasAccess', hasAccess('Kolya', 'superb') === true );
// console.log ( 'hasAccess', hasAccess('Kolya', 'adas') === false );
// console.log ( 'hasAccess', hasAccess('Edik', 'superb') === false );

// console.log()


// // 5 //
// function inRange(num, startRange = 30, endRange = 50) {
//     // Or || (+) true=1 false=0 [АБО]
//     // перше true або останнє false
//     // true || true => true
//     // true || false => true
//     // false || true => true
//     //  false || false => false
    
//     // якщо num < 30 
//     // або
//     // якщо num > 50 то число не входить в діапазон
    
//     // if (num < startRange || num > endRange ) {
//     //     return false;
//     // }

//     // return true;

//     // Спосіб №2
//     // And && (*) [І]
//     // перше false або останнє true
//     // true && true => true
//     // true && false => false
//     // false && true => false
//     // false && false => false

//     // якщо num >= 30
//     // і
//     // якщо num <= 50 то число входить в діапазон

//     if (num >= startRange && num <= endRange) {
//         return true;
//     }    

//     return false;
// }

// console.log( 'inRange', inRange(20, 10, 40) === false );
// console.log( 'inRange', inRange(40, 50 ) === true );
// console.log( 'inRange', inRange(69, 30, 70) );


// // 4 //
// function getMax(num1, num2) {
//     if(num1 > num2) {
//         return num1;
//     } 

//     return num2;
// }

// console.log( getMax(2,7) === 7 );
// console.log( getMax(-2,-6) === -2 );
// console.log( getMax(29.2,29.4) );
// console.log( getMax(7,7) );


// // 3 //
// function getStringLength(str) {

//     return str.length;
// }

// console.log( getStringLength('a') === 1 );
// console.log( getStringLength('a f g') === 3 );
// console.log( getStringLength('hello, world') );


// // 2 //
// function getMod(num1, num2 )  {
    
//     const mod = num1 % num2;
    
//     return mod;
// }

// console.log( getMod(8,2) );
// console.log( getMod(8,2.7) );



// // 1 //
// function isDevededByTen(num) {
//     // +, -, *, /, %
    
//     const mod = num % 10;


//     return mod === 0;

// }

// console.log (10, isDevededByTen(10) );
// console.log (22, isDevededByTen(22) );
// console.log (49, isDevededByTen(49) );
// console.log (21, isDevededByTen(21) );
// console.log (-40, isDevededByTen(-40) );
// console.log (22.98, isDevededByTen(22.98) );

// let userNumber = prompt('Введіть число','');

// if ( userNumber > 0) {
//     alert ( 1 );
// } else if ( userNumber < 0) {                            // Використання структури else-if
//     alert ( -1 );
// } else {
//     alert ( 0 );
// }

// let result;

// if (a + b < 4) {
//   result = 'Нижче';
// } else {
//   result = 'Вище';
// }

// let result = ( a + b < 4) ? 'Нижче' : 'Вище' ;           // Застосування тернарного оператора

// const login = prompt("Виберіть свою посаду", "Директор/ працівник");
// let  message = ( login == 'Працівник') ? 'Привіт' :
//     ( login == 'Директор') ? 'Вітаю' :
//     ( login == '') ? 'Немає логіну' :                    // Багаторівневий тернарний оператор
//     'Допобачення';
// alert(message);

// let age = prompt('Введіть ваш вік', '');

// let message = ( age < 3) ? 'привіт, крихітко' :
//     ( age < 19 ) ? 'Вже дорослий?' :
//     ( age < 30) ? 'як ти?' :                             // Багаторівневий тернарний оператор
//     ' який поважний вік' ;

// alert(message);

// let age = prompt('Ведіть число', '');
// if( age <= 14 && age >= 90) {                             
//     alert('Входить')                                   // Логічний оператор && (І)
// } else {                                               // шукає перше хибне значення 
//     alert('Не входить')                                // якщо всі true то повертає останнє значення
// }

// let age = prompt('Ведіть число', '');
// if( !(age >= 14 && age <= 90)) {
//     alert('Не входить')                              // Логічний оператор && (І)
// } else {
//     alert('входить')
// }

// let age = prompt('Ведіть число', '');
// ( age < 14 || age > 90) ? alert( 'Не входить' ) : alert( 'входить' );        // Логічний оператор || (АБО) з тернарним

// let login = prompt( 'Введіть логін', '' );

// if ( login === 'Admin' ) {
//     let password = prompt( 'Введіть пароль', '' );
//     if ( password === 'Господар' ) {
//     alert( 'Ласкаво просимо!' )
//     } else if ( password === null || password === '' ) {
//     alert( 'Скасовано' );
//     } else {                                                             // Логічний оператор || (АБО) з тернарним
//     alert('Неправильний пароль');                                        // повертає перше ІСТИННЕ значення
//     }                                                                    // не розрізняє false,0,"", null/undefined
// } else if ( login === null || login === '' ) {                           // якщо всі false то повертає останнє значення  
//     alert( 'Скасовано' );
// } else {
//     alert( 'Я вас не знаю' );
// }
  
// let lastName = prompt( 'Введіть ім\'я', '' );
// let firstName = prompt( 'Введіть фамілію', '' );
// let nickName = prompt( 'Введіть нікнейм', '' );
// const anon = 'Anonimus'
 
// alert( lastName ?? firstName ?? nickName ?? anon );                  // Оператор об'єднання з null ??
                                                                        //повертає перше ВИЗНАЧЕНЕ значення 

// let height;
// console.log(height);
// height = 25;                                                         
// height = null;
// console.log(height);
// height = height ?? 100;                                      // Змінна === null і ми в неї записуємо своє значення
// console.log(height);


// let sum = 0;

// while (true) {
//     let value = +prompt('Введіть число', '');
//                                                                 //Цикл while, коли невідомо 
//     if(!value) break;                                           // break - переривання циклу

//     sum += value;

// }

//  alert('Сума = ' + sum);
 
 
// let i = 0;
//                                                 // Виводимо в консоль непарні числа
// for (i = 0; i < 10; i++) {

//     if (i % 2 == 0) continue;                   //  Цикл for перевіряє умову, виконує завдання і збільшується на 
//                                                // задане значення, і так по колу доти поки умова виконується
//     console.log(i);
// }


// for (let i = 2; i <= 10; i++) {
//     if ( i % 2 != 0) continue;                   // Виводимо в консоль парні числа до 10 включно 
//     console.log(i);
// }

// for (let i = 0; i < 3; i++) {                      // Перебираємо числа від 0 до 3 
//     alert( `число ${i}!` );
// }

//   let i = 0;

//   while (i < 3) {                                      // Перебираємо числа від 0 до 3 через цикл while
//     alert( `число ${i}!` );
//     i++;                                               // Якщо не додати інкремент то буде безкінечний цикл
//   }



// let num;

// do {                                                        // Цикл do...while спочатку виконає одну ітерацію
//     num = prompt( 'Введене число більше за 100?', '');      // а потім перевірить умову 
// } while (num <= 100);


// let n = 4;
// let sum = 0;

// for (let i = 0; i <= n; i++) {                              // піднесення до квадрату числа
//     sum = n * i; 
// }

// console.log(sum);

// let arg = +prompt("Введіть значення?");
// switch (arg) {
//   case +'0':     // згрупування однаковивого коду             // блок SWITCH CASE дає можливість замінити багаторазове
//   case +'1':                                                 // використання if           
//     alert( 'Один або нуль' );                               // значення змінної перевіряється на СТРОГУ нерівність
//     break;                                                 // якщо значення є то заходимо в тіло case і до break
//                                                           // або до кінця всього switch якщо немає break
//   case '2':
//     alert( 'Два' );
//     break;

//   case 3:
//     alert( 'Ніколи не буде виконано!' );
//     break;
//   default:                                             // Необов'язкове значення, якщо ніц не підходить то бере його
//     alert( 'Невідоме значення' );
// }


// function basicOp(operation, value1, value2) {

//     switch(operation) {
//         case '+' : alert(value1 + value2)
//             break;
//                                                         // Задачка на калькулятор через функція і switch
//         case '-' : alert(value1 - value2)
//             break;
        
//         case '*' : alert(value1 * value2)
//             break;

//         case '/' : alert(value1 / value2)
//             break;

//         default :
//         throw new Error('Невідоме значення')   
//     }
    
// }

// basicOp('+', 10, 5);
// basicOp('-', 10, 5);
// basicOp('*', 10, 5);
// basicOp('/', 10, 5);
// basicOp('4', 10, 5);

// function showMess (text = 'Hello', name = 'Katte') {        // Задаємо дефолтні значення для функції
//     alert(text + ' : сказала ' + name);                        
// }

// showMess('Hey', 'Marry');                                  // Виклик ф-нкції

// function checkAge(age) {
//     if(age >= 18)  {
//         return true;
//     } else {
//         return confirm('Вам батьки надали дозвіл?');
//     }
// }

// let age = prompt('Скільки Вам років?', '');

// if (checkAge(age)) {                                       // використовується результат попередньої функції
//     alert('Доступ надано');
// } else {
//     alert('У доступі відмовлено');
// }


// function checkAge(age) {
//     return (age > 18) ? true : confirm('Батьки дозволили?');  // використання тернарного оператора
//     // return (age > 18) || confirm('Батьки дозволили?');

//     // if (age > 18) {
//     //   return true;
//     // } else {
//     //   return confirm('Батьки дозволили?');
//     //}
//   }

//   checkAge(4);


// function min(a,b) {
//     let result = a;

//     if (a > b) {
//         console.log(result);
//         return alert(result);                      // функція для порівняння чисел через оператори порівняння
//     } else {
//         console.log(result);
//         return result;
//     }
// }

// min(9,20);

// function min(a, b) {
//     if (a < b) {
//       console.log(b);  
//       return a;
//     } 
//       console.log(a);
//       return b;
    
//   }

// min(29,27)


// function checkAge(age) {
//     if (age > 18) {
//       return true;                              // використання if else
//     } else {
//       return confirm('Батьки дозволили?');
//     }
//   }
// checkAge(12);

// function pow(x, n) {
//     let result = x;

//     if ( n == 0) {                                          // випадок у нульовому степені 
//       return 1;
//     }                                                       // піднесення до степеня 

//     for(let i = 1; i <= n; i++) {                           
//         result *= x; 
//     }

//     return result;
// }

// let x = prompt('Введіть число', '');
// let n = prompt('Введіть степінь', '');

// if(n < 0) {
//     alert(` Число ${n} не підтримується,введіть натуральне число`);
// } else {
//     alert(pow(x,n));
// }


// function sayHi() {
//     alert('Привіт');
// }

// alert(sayHi());

// function ask(question, yes, no) {
//     if (confirm(question)) { yes() }                        // Коллбеки(функції повернення)
//     else no();
//   }
  
//   function showOk() {
//     alert( "Ви погодились." );
//   }                                                   // використання: функції showOk, showCancel 
//                                                       // передаються як аргументи для ask
//   function showCancel() {
//     alert( "Ви скасували виконання." );
//   }
  
//   ask("Ви згодні?", showOk, showCancel);


// let n = prompt('Введіть число','');

                                                  
// let double = function(){
//     let n = +prompt('Число','')                                          //  Функціональний вираз
//     n = n * 2;
//     return alert(n);
// };
  
// double();

                                                                       // Стрілкова функція
// let double = () => n * 2;
// let n = 24;

// alert(double());


// let age = prompt('Скільки вам років?','');

// let welcome = (age < 18) ?                                                // тернарний оператор + анонімні функції 
//     () => alert('Пока') :                                                // стрілкові фнкції, упускаємо ім'я 
//     () => alert('Привіт');

// welcome();



// let ask = (question, yes, no) => (confirm(question)) ? yes() : no();

// ask("Ви згодні?", () => { alert("Ви погодились."); }, () => { alert("Ви скасували виконання."); } );  // анонімні коллбеки
  