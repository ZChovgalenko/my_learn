// В ваш подъезд вьехали новые жильцы, которые привезли с собой тараканов.
// Насекомые в поисках еды ползут по вентиляционной шахте.
// За час они поднимаются на 1м, но сразу после этого теряют равновесие и скатываются вниз на 0.5м
// Вопрос: сколько времени у вас есть на покупку ловушек для тараканов, если расстояние от вас до соседей 5м.

// (*) Напишите функцию, которая будет решать эту задачу в общем виде, для любых (speed, slowdown, mine),
// где mine - это высота шахты, speed - скорость таракана за час, slowdown - расстояние падения из-за усталости

function getTimeForInterceptCockroaches(mine = 5, speed = 1, slowdown = 0.5) {
    let currentPathLenght = 0;
    let time = 0;

    do{
        let currentDiff =  mine - currentPathLenght; 
        
        if( currentDiff <= speed) {
            return time + currentDiff / speed;
        }
    
        time++;
        currentPathLenght += speed; 
    
        if(currentPathLenght >= mine) {
            return time - ( currentPathLenght - mine ) / speed;
        }
    
        currentPathLenght -= slowdown;
    } while (time < 8760);

    throw new Error('Таракана повзуть дуже повільно');
}


console.log( getTimeForInterceptCockroaches(.9, 1, .5) ); // .9
console.log( getTimeForInterceptCockroaches(2, 1, .5) );  // 3
console.log( getTimeForInterceptCockroaches(4, 1, .5) );  // 7
console.log( getTimeForInterceptCockroaches(5, 1, .5) );