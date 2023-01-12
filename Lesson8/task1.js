/* eslint-disable no-unused-vars */
// 1. Вывести в консоль числа от 1 до n, где n - это произвольное целое число большее 1.
// 2. Вывести в консоль простые числа от 1 до n.
// 3. Вывести в консоль числа кратные k, в диапазоне от 1 до n. => in home (for)
// 4. В первых трех задачах добавить пользователю возможность ввести значения переменных. => in home
// 5. Выводить в консоль простые числа от 1 до n до тех пор, пока пользователь не скажет хватить.

function task1(n) {
    for(let i = 1; i <= n; i++) {
        console.log(i);
    }
}



function isSimple(x) {
    for (let i = 2; i < x; i += 1) {
        if (x % i === 0) {
            return false;
        }
    }

    return true;
}

function task2(n) {
    // for(let i = 1; i <= n; i++) {
    //     if(isSimple(i)) {
    //         console.log(i);
    //     }
    // }

    let i = 1;
    while(i <= n){
        if(isSimple(i)) {
        console.log(i);
    }

    i = i + 1;  
    }
}

function task3(n, k) {
    
    for(let i = k; i <= n; i += k ) {
        if(i % k === 0) {
       console.log(i);
    }
    
    
    
    // let i = k;
    // // let counter = 0;

    // while (i <= n) {
    //     // counter++

    //     if(i % k === 0) {
    //          console.log(i);
    //         i += k;
    //     } 

    // console.log( 'task3 counter: ', counter);
}
} 

// task3(15, 5); // 5,10,15

function task4num1() {
    alert('Задача Вывести в консоль числа от 1 до n');
    
    const userData = prompt('Введіть n - это произвольное целое число большее 1' , '2');
    const n = +userData;

    if(userData === null) {
        alert('Допобачення!')
        return;
    }

    console.log(userData, typeof userData);
    console.log(n, typeof n);

    if(isNaN(n) || n <= 0) {
        alert('Число не коректне');
        throw new Error('Число не коректне');
    }

    task1(n);
}

function task4num2() {
    alert('Завдання Вывести в консоль простые числа от 1 до n');
    const userData = prompt('Введіть число n');
    const n = +userData;

    if(userData === null) {
        alert('Нажато відміна, допобачення')
        return
    }
    if(isNaN(n) || n <= 0) {
        alert('Число не коректне');
        throw new Error('Число не коректне');
    }

    task2(n);
}

function task4num3() {
    alert('Вывести в консоль числа кратные k, в диапазоне от 1 до n');

    const userDataN = prompt('Введіть число n')
    const userDataK = prompt('Введіть число k')
    const n = +userDataN;
    const k = +userDataK;

    if(userDataN === null || userDataK === null) {
        alert('Ви натиснули відміна, допобачення');
        return
    }
    if(isNaN(n) || n <= 0 || isNaN(k) || k <= 0) {
        alert('Число не коректне');
        throw new Error('Число не коректне');  
    }

    task3(n, k);
}
task4num3();



function task5(n) {
    let i = 1;
    let userData;

    do {
        if(isSimple(i)) {
        console.log(i);
        
        userData = confirm('Продовжити?');
    }

    i++;

    } while(userData);
}

