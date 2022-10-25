// 1. Проверить является ли число круглым 
// 2. Получить у пользователя два числа и узнать остаток от деления первого на второе
// 3. Получить у пользователя строку и узнать ее длину
// 4. Получить у пользователя два числа и назвать наибольшее
// 5. Получить у пользователя число и сказать входит ли оно в диаппазон от 30 до 50
// 6. Для доступа на сайт нужно ввести логин и пароль.
//    На сайте зарегистрировано четыре пользователя с паролями.
//    Получите у пользователя логин и пароль и скажите имеет ли он доступ на сайт



// 6 //

function hasAccess (login, password ) {
    const user1 = 'Kolya';
    const pass1 = 'superb';

    const user2 = 'Edik';
    const pass2 = 'wertp';

    const user3 = 'Alina';
    const pass3 = 'audiopsa';

    const user4 = 'Andrey';
    const pass4 = 'yyyoods';

    function isUser (user, pass){
        return ( login === user && password === pass )
    }

    return isUser(user1, pass1)
        || isUser(user2, pass2 )
        || isUser(user3, pass3 )
        || isUser(user4, pass4 );
}

console.log ( 'hasAccess', hasAccess('Kolya', 'superb') === true );
console.log ( 'hasAccess', hasAccess('Kolya', 'adas') === false );
console.log ( 'hasAccess', hasAccess('Edik', 'superb') === false );

console.log()


// 5 //
function inRange(num, startRange = 30, endRange = 50) {
    // Or || (+) true=1 false=0 [АБО]
    // перше true або останнє false
    // true || true => true
    // true || false => true
    // false || true => true
    //  false || false => false
    
    // якщо num < 30 
    // або
    // якщо num > 50 то число не входить в діапазон
    
    // if (num < startRange || num > endRange ) {
    //     return false;
    // }

    // return true;

    // Спосіб №2
    // And && (*) [І]
    // перше false або останнє true
    // true && true => true
    // true && false => false
    // false && true => false
    // false && false => false

    // якщо num >= 30
    // і
    // якщо num <= 50 то число входить в діапазон

    if (num >= startRange && num <= endRange) {
        return true;
    }    

    return false;
}

console.log( 'inRange', inRange(20, 10, 40) === false );
console.log( 'inRange', inRange(40, 50 ) === true );
console.log( 'inRange', inRange(69, 30, 70) );


// 4 //
function getMax(num1, num2) {
    if(num1 > num2) {
        return num1;
    } 

    return num2;
}

console.log( getMax(2,7) === 7 );
console.log( getMax(-2,-6) === -2 );
console.log( getMax(29.2,29.4) );
console.log( getMax(7,7) );


// 3 //
function getStringLength(str) {

    return str.length;
}

console.log( getStringLength('a') === 1 );
console.log( getStringLength('a f g') === 3 );
console.log( getStringLength('hello, world') );


// 2 //
function getMod(num1, num2 )  {
    
    const mod = num1 % num2;
    
    return mod;
}

console.log( getMod(8,2) );
console.log( getMod(8,2.7) );



// 1 //
function isDevededByTen(num) {
    // +, -, *, /, %
    
    const mod = num % 10;


    return mod === 0;

}

console.log (10, isDevededByTen(10) );
console.log (22, isDevededByTen(22) );
console.log (49, isDevededByTen(49) );
console.log (21, isDevededByTen(21) );
console.log (-40, isDevededByTen(-40) );
console.log (22.98, isDevededByTen(22.98) );
