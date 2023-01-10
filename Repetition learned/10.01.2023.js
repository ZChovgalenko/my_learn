    // Object
// let user = {
//     name: 'Іванко',
//     "likes dogs": true, 
//     age: 13,
// };

// delete user.age;
// alert(user["likes dogs"]);                               // Робота з створенням об'єкта
// alert(user['age']);

//user["like swim"] = false;
// alert(user["like swim"]);
// delete user["like swim"];
// alert(user["like swim"]);

// let key = prompt ("Що бажаєте дізнатись?", 'name,age,likes dogs,like swim');

// alert(user[key]);

// function findInfo (name,age) {
//     return{          
//         name,                                        // Значення властивості із параметрів функції
//         age,
//     };
// }

// alert(findInfo("Петро", 40).name);

// let user = {
//     name: 'Іванко',
//     "likes dogs": true, 
//     age: 13,
// };
// user["like swim"] = false;                        // Працюємо із заданням двухсловного значення ключа

// for(let key in user) {
//     alert(user[key])
// }
// alert(user.nam === undefined);                   // Перевіряємо чи містить даний об'єкт такий ключ

// alert("age" in user);
// alert("surname" in user);

// let user = {
//     sayHi() {                
//         alert("Hello");      
//     },                                           // Задаємо метод об'єкта    
//     sayBy : function () {                        // методом об'єкта є функція задана у його властивості
//         alert("Good Bye")
//     },
// }

// user.sayHi();
// user.sayBy();


// let user = {                         
//     name: prompt("Введіть ім'я", ""),        
//     "likes dogs": true,                      // Використання ключоваого слова THIS
//     age: 13,
//     sayHi() {
//         alert(this.name);
//     },
// };

// var gVar = 4;                        // Задаємо ГО через вар
// // user.sayHi();
// function sayHi(){
//     if(true) {
//         // let test = true;
//         var phrase = true;
//     }
//     alert(phrase);                   // Перевіряємо рівень вкладеності з ГО
// }
    
// sayHi();
// // alert(phrase);                    
// alert(globalThis.gVar);           // Виводимо глобальний об'єкт 
// alert(window.gVar);              // Виводимо глобальний об'єкт

// if(!globalThis.Promise) {          // Перевіряємо чи є глолбальний об'єкт
//     alert("22sda");                // Щоб використати поліфіл наприклоа 
// }

// alert("Hello");
// let prom = prompt ("Можете вводити", "");
// let result = confirm("Вам є 18 років?");            // Взаємодія з користувачем
// alert(prom); // результат prom
// alert(result); // рузультат result 

// alert(Number("   123    "));
// alert(Number("   123z    "));
// alert(Number(null));                             // Перетворення типу 
// alert(Number(false));


// let x = 1;
// x = -x;                                          // Унарне заперечення
// alert(x);

// let number = 3423 % 10;                             // Залишок від ділянне  показує останнє число
// alert(number);

// let number = prompt("Введіть число", "");
// function itIsEven() {
//     let result = number % 2;
//     if (result == 0) {
//         alert("Число парне");                      //Функц перевіряє чило на парність з допомогою % 
//         return
//     }
//     alert("Число не парне");
// }
// itIsEven();




