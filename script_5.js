const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log(`Est-ce que tous les livres ont été au moins empruntés une fois ?`)

unrented = []

books.forEach(rent => {
    if (rent.rented < 1){
        return unrented.push(rent)
    }});
    if (unrented.length === 0){
        console.log(`Oui, tous les livres ont été empruntés au moins une fois.`)
    }
    else {
        console.log(`Non, tous les livres n'ont pas été empruntés au moins une fois.`)
    }

console.log(`---------------------------------------------------`)


// books.forEach(maximum => {
// Math.max(maximum.rented)
// });
// console.log(maximum)

function higher(a, b) {
    if (a.rented > b.rented) {
      return -1;
    } else {
      return 1;
    };
};


console.log(books.sort(higher)[0])

console.log(`---------------------------------------------------`)

function lower(a, b) {
    if (a.rented < b.rented) {
      return -1;
    } else {
      return 1;
    };
};


console.log(books.sort(lower)[0])

console.log(`---------------------------------------------------`)

function searchid(search) {
    return search.id === 873495
};

console.log(books.find(searchid))

console.log(`---------------------------------------------------`)

var id = 133712;
var index = books.map(search => {
    return search.id;
}).indexOf(id);
  
books.splice(index, 1);
console.log(books);

console.log(`---------------------------------------------------`)

function organize(a, b) {
    if (a.title < b.title) {
      return -1;
    } else {
      return 1;
    };
};

console.log(books.sort(organize))