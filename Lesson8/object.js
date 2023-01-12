/**
 * Напишите код, выполнив задание из каждого пункта отдельной строкой:
    1.  Создайте пустой объект user.
    2.  Добавьте свойство name со значением Alexander.
    3.  Добавьте свойство group со значением fe2402
    4.  Измените значение свойства name на Ilya.
    5.  Удалите свойство name из объекта.
    6.  Создайте копию обьекта user.
    7.  Проверьте, что созданный обьект не пустой.
    8.  Узнайте количество свойств в нем.
    9.  Измените в копии свойство name на Ivan.
    10. Сравните свойства этих двух обьектов и придумайте структуру данных для отображения их разницы.
*/

// const user = {};
// user.name = 'Alexander';
// user.group = 'fe2402';
// console.log(user);
// user.name = 'Ilya'
// console.log(user);
// delete user.name ;
// console.log(user);

// let clone = Object.assign({}, user);
// // let secondClone = {};
// // for(let key in user){ 
// //     secondClone[key] = user[key];
// // }

// const user1 = {
//     name:'Vitalik',
// };
 
// user1.group = user.group;
// console.log( user1 );

// function objectLength(obj) {
//     let counter = 0;

//     for(const key in obj) {
//         counter++;
//     }
//     console.log(counter);
//     return counter;
// }

// objectLength(user);

// if(clone != undefined){
//     alert("Об'єкт не пустий");
// }
// // console.log(secondClone);
// console.log(clone);

// let arrayLenght = Object.keys(clone);
// console.log(arrayLenght.length);

// clone.name = 'Ivan';
// console.log(clone);
// console.log(user);


function getMissingElement(superImportantArray) {
    let res = 0;
    for (let i = 0; i < 10; i++) {
      superImportantArray.includes(i) ? i : res = i;
    }
    alert(res);
  }

  getMissingElement( [0,5,1,3,2,9,7,6,4]);
  getMissingElement( [9,2,4,5,7,0,8,6,1]);