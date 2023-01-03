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
// } else if ( userNumber < 0) {
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

// let result = ( a + b < 4) ? 'Нижче' : 'Вище' ;

// let  message = ( login == 'Працівник') ? 'Привіт' :
//     ( login == 'Директор') ? 'Вітаю' :
//     ( login == '') ? 'Немає логіну' : 
//     '';

// let age = prompt('Введіть ваш вік', '');

// let message = ( age < 3) ? 'привіт, крихітко' :
//     ( age < 19 ) ? 'Вже дорослий?' :
//     ( age < 30) ? 'як ти?' :
//     ' який поважний вік' ;

// alert(message);

// let age = prompt('Ведіть число', '');
// if( age <= 14 && age >= 90) {
//     alert('Входить')
// } else {
//     alert('Не входить')
// }

// let age = prompt('Ведіть число', '');
// if( !(age >= 14 && age <= 90)) {
//     alert('Не входить')
// } else {
//     alert('входить')
// }

// let age = prompt('Ведіть число', '');
// ( age < 14 || age > 90) ? alert( 'Не входить' ) : alert( 'входить' );

// let login = prompt( 'Введіть логін', '' );

// if ( login === 'Admin' ) {
//     let password = prompt( 'Введіть пароль', '' );
//     if ( password === 'Господар' ) {
//     alert( 'Ласкаво просимо!' )
//     } else if ( password === null || password === '' ) {
//     alert( 'Скасовано' );
//     } else {
//     alert('Неправильний пароль');
//     } 
// } else if ( login === null || login === '' ) {
//     alert( 'Скасовано' );
// } else {
//     alert( 'Я вас не знаю' );
// }
  
// let lastName = prompt( 'Введіть ім\'я', '' );
// let firstName = prompt( 'Введіть фамілію', '' );
// let nickName = prompt( 'Введіть нікнейм', '' );
// const anon = 'Anonimus'
 
// alert( lastName ?? firstName ?? nickName ?? anon );

// let sum = 0;

// while (true) {
//     let value = +prompt('Введіть число', '');

//     if(!value) break;

//     sum += value;

// }

//  alert('Сума = ' + sum);
 
 
// let i = 0;

// for (i = 0; i < 10; i++) {

//     if (i % 2 == 0) continue;

//     console.log(i);
// }

 

    














// for (i = 2; i <= 10; i++) {
//     if ( i % 2 != 0) continue;
//     console.log(i);
// }

// for (let i = 0; i < 3; i++) {
//     alert( `число ${i}!` );
//   }

//   let i = 0;

//   while (i < 3) {
//     alert( `число ${i}!` );
//     i++;
//   }



// let num;

// do {
//     num = prompt( 'Введене число більше за 100?', '');
// } while (num <= 100 && num);


// let n = 5;
// let sum = 0;

// debugger;

// for (let i = 0; i <= n; i++) {
//     sum = sum + i; 
// }

// console.log(sum);

// let arg = +prompt("Введіть значення?");
// switch (arg) {
//   case '0':
//   case '1':
//     alert( 'Один або нуль' );
//     break;

//   case '2':
//     alert( 'Два' );
//     break;

//   case 3:
//     alert( 'Ніколи не буде виконано!' );
//     break;
//   default:
//     alert( 'Невідоме значення' );
// }


// function basicOp(operation, value1, value2)
// {
    
//     let result = value1 + operation + value2;
  
 
  
//   console.log(result);
// }

// basicOp('-', 4, 11);

// function showMess (text, name) {
//     alert(text + ' : сказала ' + name);
// }

// showMess( );

// function checkAge(age) {
//     if(age >= 18)  {
//         return true;
//     } else {
//         return confirm('Вам батьки надали дозвіл?');
//     }
// }

// let age = prompt('Скільки Вам років?', '');

// if (checkAge(age) ) {
//     alert('Доступ надано');
// } else {
//     alert('У доступі відмовлено');
// }


// function checkAge(age) {
//     // return (age > 18) ? true : confirm('Батьки дозволили?'); 
//     return (age > 18) || confirm('Батьки дозволили?');

//     // if (age > 18) {
//     //   return true;
//     // } else {
//     //   return confirm('Батьки дозволили?');
//     // }
//   }

//   checkAge(4);


// function min(a,b) {
//     let result = a;

//     if (a > b) {
//         console.log(result);
//         return result;
//     } else {
//         console.log(result);
//         return result;
//     }
// }

// min(29,20);

// function min(a, b) {
//     if (a < b) {
//       console.log(b);  
//       return a;
//     } else {
//       console.log(a);
//       return b;
//     }
//   }



// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Батьки дозволили?');
//     }
//   }

// function pow(x, n) {
//     let result = x;

//     for(let i = 1; i <= n; i++) {
//         result *= x; 
//     }

//     return result;
// }

// let x = prompt('Введіть число', '');
// let n = prompt('Введіть степінь', '');

// if(n < 1) {
//     alert(` Число ${n} не підтримується,введіть натуральне число`);
// } else {
//     alert(pow(x,n));
// };


// function sayHi() {
//     alert('Привіт');
// }

// alert(sayHi());

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   function showOk() {
//     alert( "Ви погодились." );
//   }
  
//   function showCancel() {
//     alert( "Ви скасували виконання." );
//   }
  
//   // використання: функції showOk, showCancel передаються як аргументи для ask
//   ask("Ви згодні?", showOk, showCancel);,


// let n = prompt('Введіть число','');

//  Функціональний вираз
// let double = function(){
//     n = n * 2;
//     return n;
// };

// // Стрілкова функція
// let double = () => n * 2;


// alert(double());


// let age = prompt('Скільки вам років?','');

// let welcome = (age < 18) ?
//     () => alert('Пока') :
//     () => alert('Привіт');

// welcome();


// 
// let ask = (question, yes, no) => (confirm(question)) ? yes() : no();

// ask(
//     "Ви згодні?",
//     () => { alert("Ви погодились."); },
//     () => { alert("Ви скасували виконання."); }
// );
  