const superheroes = require('superheroes');

console.log("There are " + superheroes.all.length + " superhero names in this package!");
//=> ['3-D Man', 'A-Bomb', …]

console.log(superheroes.random());
//=> 'Spider-Ham'
