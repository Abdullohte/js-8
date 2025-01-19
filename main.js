const words = ['non', 'banan', 'mashina', 'nok', 'asal', 'olma', 'aziza', 'Gul'];

const n = [];
const nen = [];

words.forEach(word => {
    if (word.includes('n')) {
        n.push(word);
    } else {
       nen.push(word);
    }
});

console.log(n, '"n" harfi ishtirok etgan so\'zlar');
console.log(nen, '"n" harfi ishtirok etmagan so\'zlar');
