// Начальник цеха пригласил людей на совещание
// Каждый, кто входит в кабинет пожимает руки всем присутствующим
// Сколько человек зашло в кабинет, если известно, что всего произошло 120 рукопожатий.

function getPeople(handshake) {
    let countPeople = 0;
    let currentHandshake = 0; 

    do {
        currentHandshake += ++countPeople;
    } while( currentHandshake < handshake);

    if(currentHandshake > handshake) {
        throw new Error(`Некоректне значення. handshake=${handshake}; currentHandshake=${currentHandshake}; peopleCount=${countPeople}`);
    }

    return countPeople;
}



console.log( getPeople(1) ); // 1
console.log( getPeople(3) ); // 2
console.log( getPeople(6) ); // 3
console.log( getPeople(10) ); // 4
console.log( getPeople(15) ); // 5
console.log( getPeople(120) ); // ?
console.log( getPeople(125) ); // ERROR