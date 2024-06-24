// let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn'];

// console.log(nobleGases); // ['He', 'Ne', 'Ar', 'Kr', 'Xn']

// let nobleGases = Array('He', 'Ne', 'Ar', 'Kr', 'Xn');

// console.log(nobleGases); // ['He', 'Ne', 'Ar', 'Kr', 'Xn']

// let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn'];
// nobleGases[0]; // 'He'
// nobleGases[1]; // 'Ne'
// nobleGases[2]; // 'Ar'
// nobleGases[3]; // 'Kr'
// nobleGases[4]; // 'Xn'
// nobleGases[5]; // undefined

// let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn'];
// nobleGases[5] = 'Rn';
// console.log(nobleGases); // ['He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn']

// nobleGases.length; // 6

// let elements = [[['H', 'Li', 'Na'], ['Be', 'Mg']], [['B', 'Al'], ['C', 'Si']]];

// console.log(elements[0]); // [['H', 'Li', 'Na'], ['Be', 'Mg']]

// console.log(elements[0][0]); // ['H', 'Li', 'Na']

// console.log(elements[0][0][0]); // 'H'

// let firstGroup = ['H', 'Li', 'Na',, 'K', 'Rb', 'Cs'];
// console.log(firstGroup);
// // ['H', 'Li', 'Na', empty, 'K', 'Rb', 'Cs']

// // Increasing the length property
// firstGroup.length = 11;
// console.log(firstGroup);
// // ['H', 'Li', 'Na', empty, 'K', 'Rb', 'Cs', empty × 4]

// // Assigning an element to an index greater than the length
// firstGroup[15] = 'Fr';
// console.log(firstGroup);
// // ['H', 'Li', 'Na', empty, 'K', 'Rb', 'Cs', empty × 8, 'Fr']

// let dough1 = ['flour', 'water', 'yeast', 'salt'];
// let dough2 = ['flour', 'water', 'yeast', 'salt'];

// dough1 === dough2; // false

// [] === []; // false
// Array() === Array(); // false

// let dough1 = ['flour', 'water', 'yeast', 'salt'];
// let dough2 = dough1;

// dough1 === dough2; // true

// const compareArr = (arr1, arr2) => {
//     if (arr1.length !== arr2.length) {
//         return false
//     } 
//     for (let i = 0; i < arr1.length; i++) {
//     	if (arr1[i] !== arr2[i]) {
//             return false
//         }
//     }
//     return true
// };

// if (arr1.length !== arr2.length) {
//     return false
// }

// for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//         return false
//     }
// }

// let dough1 = ['flour', 'water', 'yeast', 'salt'];
// let dough2 = ['flour', 'water', 'yeast', 'salt'];

// compareArr(dough1, dough2); // true

// let metal1 = [['Li', 'Na', 'K'], ['Be', 'Mg', 'Ca']];
// let metal2 = [['Li', 'Na', 'K'], ['Be', 'Mg', 'Ca']];

// const compareNested = (arr1, arr2) => {
//     if (arr1.length !== arr2.length) {
//         return false
//     } for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr1[i].length; j++) {
//             if (arr1[i][j] !== arr2[i][j]) {
//                 return false
//             }
//         }
//     }
//     return true
// };

// compareNested(metal1, metal2); // true

// let albums1 = [
//     {artist: 'Frank Zappa', title: 'Over-Nite Sensation', year: 1973},
//     {artist: 'Frank Zappa', title: 'Apostrophe', year: 1974},
//     {artist: 'Frank Zappa', title: 'One Size Fits All', year: 1975}
// ];
// let albums2 = [
//     {artist: 'Frank Zappa', title: 'Over-Nite Sensation', year: 1973},
//     {artist: 'Frank Zappa', title: 'Apostrophe', year: 1974},
//     {artist: 'Frank Zappa', title: 'One Size Fits All', year: undefined},

//     const compareArrObj = (arr1, arr2) => {
//         if (arr1.length !== arr2.length) {
//             return false
//         }
//         for (let i = 0; i < arr1.length; i++) {
//             if (Object.keys(arr1[i]).length !== Object.keys(arr2[i]).length) {
//                 return false
//             }
//             for (let prop in arr1[i]) {
//                 if (arr1[i][prop] !== arr2[i][prop]) {
//                     return false
//                 }
//             }
//         }
//         return true
//     };

//     for (let i = 0; i < arr1.length; i++) {
//         if (Object.keys(arr1[i]).length !== Object.keys(arr2[i]).length) {
//             return false
//         }
// //...
// }

// for (let prop in arr1[i]) {
//     if (arr1[i][prop] !== arr2[i][prop]) {
//         return false
//     }
// }

// compareArrObj(albums1, albums2); // false

// albums2[2]['year'] = 1975;

// compareArrObj(albums1, albums2); // true



// let alkali = ['Li', 'Na', 'K'];
// let alkEarth = ['Be', 'Mg', 'Ca'];

// // Merging two arrays with the spread operator
// let metals = [...alkali, ...alkEarth];
// console.log(metals); // ['Li', 'Na', 'K', 'Be', 'Mg', 'Ca']

// // Copying an array with the spread operator
// let metalsCopy = [...metals];
// console.log(metalsCopy); // ['Li', 'Na', 'K', 'Be', 'Mg', 'Ca']


// function f1(first, second, third, ...others) {
// 	console.log(first);
//     console.log(second);
//     console.log(third);
//     console.log(others);
// };

// f1('He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn'); 
// // He
// // Ne
// // Ar
// // ['Kr', 'Xn', 'Rn']


// function f2(...args) {
// 	console.log(args);
//     // you can use an iterative method on the args array
// };

// f2('He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn');
// // ['He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn']


// let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn'];
// let [firstRow, secondRow,,FourthRow] = nobleGases;
// console.log(firstRow); // 'He'
// console.log(secondRow); // 'Ne'
// console.log(FourthRow); // 'Kr'
// // 'Ar' is skipped because of the additional comma


// let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn'];
// nobleGases[5] = 'Rn';
// console.log(nobleGases); // ['He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn']


// // Syntax
// array.push(element1, /* … ,*/ elementN)

// let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn'];
// nobleGases.push('Rn'); // 6
// // push() returns the length of the modified array
// console.log(nobleGases); // ['He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn']


// let halogens = ['F', 'Cl'];
// console.log(halogens); // ['F', 'Cl']

// halogens.push('Br', 'I', 'At'); // 5
// // push() returns the length of the modified array
// console.log(halogens); // ['F', 'Cl', 'Br', 'I', 'At']

// Syntax
// array.unshift(element1, /* … ,*/ elementN)


// let halogens = ['F', 'Cl'];
// console.log(halogens); // ['F', 'Cl']

// halogens.unshift('Br', 'I', 'At'); // 5
// // unshift() returns the length of the modified array
// console.log(halogens); // ['Br', 'I', 'At', 'F', 'Cl']


// // Syntax
// array.pop()

// let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn'];
// console.log(nobleGases); // ['He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn']

// nobleGases.pop(); // 'Rn'
// // pop() returns the removed element
// console.log(nobleGases); // ['He', 'Ne', 'Ar', 'Kr', 'Xn']


// Syntax
// array.shift()

// let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn'];
// console.log(nobleGases); // ['He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn']

// nobleGases.shift(); // 'He'
// // shift() returns the removed element
// console.log(nobleGases); // ['Ne', 'Ar', 'Kr', 'Xn', 'Rn']


// Syntax
// array.splice(start, count, addition1, /* … ,*/ additionN)


// let nobleGases = ['He', 'Ne', 'Cl', 'Rn'];
// console.log(nobleGases); // ['He', 'Ne', 'Cl', 'Rn']

// nobleGases.splice(2, 1, 'Ar', 'Kr', 'Xn'); // ['Cl']
// // splice() returns an array with removed elements
// console.log(nobleGases); // ['He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn']

// let nobleGases = ['He', 'Ne', 'Rn'];
// console.log(nobleGases); // ['He', 'Ne', 'Rn']

// nobleGases.splice(2, 0, 'Ar', 'Kr', 'Xn'); // []
// // splice() returns an array with removed elements
// console.log(nobleGases); // ['He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn']

// Syntax
// array1.concat(array2, /* … ,*/ arrayN)

// let alkali = ['Li', 'Na', 'K'];
// let moreAlkali = ['Rb', 'Cs', 'Fr'];
// let alkEarth = ['Be', 'Mg', 'Ca'];

// alkali.concat(moreAlkali);
// // ['Li', 'Na', 'K', 'Rb', 'Cs', 'Fr']

// alkali.concat(moreAlkali, alkEarth);
// // ['Li', 'Na', 'K', 'Rb', 'Cs', 'Fr', 'Be', 'Mg', 'Ca']



// let alkali = ['Li', 'Na', 'K'];
// let moreAlkali = ['Rb', 'Cs', 'Fr'];
// let alkEarth = ['Be', 'Mg', 'Ca'];

// alkali.push(...moreAlkali); // 6
// console.log(alkali); // ['Li', 'Na', 'K', 'Rb', 'Cs', 'Fr']

// let metals = [...alkali, ...alkEarth];
// console.log(metals); // ['Li', 'Na', 'K', 'Rb', 'Cs', 'Fr', 'Be', 'Mg', 'Ca']
// console.log(alkali); // ['Li', 'Na', 'K', 'Rb', 'Cs', 'Fr']

// Syntax
// array.toString()


// // Syntax
// array.join(separator)

// let animals = ['pig', 'dog', 'sheep'];

// animals.toString(); // 'pig,dog,sheep'

// animals.join(', '); // 'pig, dog, sheep'

// animals.join(' '); // 'pig dog sheep'

// animals.join(' * '); // 'pig * dog * sheep'


// let arr = [1, 'two', null, undefined, true, {}];

// arr.toString(); // '1,two,,,true,[object Object]'

// arr.join(); // '1,two,,,true,[object Object]'


// // Syntax
// JSON.stringify(array)

// let albums = [
//     {artist: 'Frank Zappa', title: 'Apostrophe', year: 1974},
//     {artist: 'Frank Zappa', title: 'One Size Fits All', year: 1975}
// ];

// JSON.stringify(albums);
// //'[{"artist":"Frank Zappa","title":"Apostrophe","year":1974},{"artist":"Frank Zappa","title":"One Size Fits All","year":1975}]'

// let a = [1, null, 3];
// let b = [1, undefined, 3];

// a[1] === b[1]; // false

// JSON.stringify(a) === JSON.stringify(b); // true

// // Syntax
// array.every((element, index, array) => {})

// const compareEvery = (arr1, arr2) => {
//     return arr1.length === arr2.length &&
//     arr1.every((elem, index) => elem === arr2[index])
// }

// arr1.every((elem, index) => elem === arr2[index])


// let a = [1, null, 3];
// let b = [1, undefined, 3];

// compareEvery(a,b); // false


// Syntax
// array.slice(start, end)

// let dough = ['flour', 'water', 'yeast', 'salt'];

// let doughCopy = dough.slice();
// console.log(doughCopy); // ['flour', 'water', 'yeast', 'salt']


// doughCopy[1] = 'wine';
// console.log(doughCopy); // ['flour', 'wine', 'yeast', 'salt']

// console.log(dough); // ['flour', 'water', 'yeast', 'salt']

// let albums = [
//     {artist: 'Frank Zappa', title: 'Apostrophe'},
//     {artist: 'Frank Zappa', title: 'One Size Fits All'}
// ];

// let albumsCopy = albums.slice();

// albumsCopy[1]['title'] = 'Absolutely Free';
// console.log(albumsCopy);
// [
//  {artist: 'Frank Zappa', title: 'Apostrophe'},
//  {artist: 'Frank Zappa', title: 'Absolutely Free'}
// ];

// console.log(albums);
// [
//  {artist: 'Frank Zappa', title: 'Apostrophe'},
//  {artist: 'Frank Zappa', title: 'Absolutely Free'}
// ];

// albumsCopy[1] = {artist: 'Captain Beefheart', title: 'Safe as Milk'};

// console.log(albumsCopy);
// [
//  {artist: 'Frank Zappa', title: 'Apostrophe'},
//  {artist: 'Captain Beefheart', title: 'Safe as Milk'}
// ];

// console.log(albums);
// [
//  {artist: 'Frank Zappa', title: 'Apostrophe'},
//  {artist: 'Frank Zappa', title: 'Absolutely Free'}
// ];

// Syntax
// array.map((element, index, array) => {})

    // let albums = [
    //     {artist: 'Frank Zappa', title: 'Apostrophe'},
    //     {artist: 'Frank Zappa', title: 'One Size Fits All'}
    // ];
    
    // let mapAlbums = albums.map(element => element);
    // console.log(mapAlbums);
    // [
    //  {artist: 'Frank Zappa', title: 'Apostrophe'},
    //  {artist: 'Frank Zappa', title: 'One Size Fits All'}
    // ];

    // let albums = [
    //     {artist: 'Frank Zappa', title: 'Apostrophe'},
    //     {artist: 'Frank Zappa', title: 'One Size Fits All'}
    // ];
    
    // let albumsCopy = JSON.parse(JSON.stringify(albums));
    // console.log(albumsCopy);
    // [
    //  {artist: 'Frank Zappa', title: 'Apostrophe'},
    //  {artist: 'Frank Zappa', title: 'One Size Fits All'}
    // ];

    // Syntax
// array.includes(value, startingIndex)

// let dMinor = ['D', 'E', 'F', 'G', 'A', 'B♭', 'C'];

// dMinor.includes('E'); // true
// dMinor.includes('E', 2); // false

// Syntax
// array.indexOf(value, startingIndex)

// let dMinor = ['D', 'E', 'F', 'G', 'A', 'B♭', 'C'];

// dMinor.indexOf('E'); // 1
// dMinor.indexOf('E', 2); // -1

// Syntax
// array.find((element, index, array) => {})

// array.findLast((element, index, array) => {})

    // let animals = [
    //     {no: 1, track: 'Pigs on the Wing (Part One)'},
    //     {no: 2, track: 'Dogs'},
    //     {no: 3, track: 'Pigs (Three Different Ones)'},
    //     {no: 4, track: 'Sheep'},
    //     {no: 5, track: 'Pigs on the Wing (Part Two)'}
    // ];
    
    // animals.find(el => el['track'].includes('Pigs'));
    // // {no: 1, track: 'Pigs on the Wing (Part One)'}
    
    // animals.findLast(el => el['track'].includes('Pigs'));
    // // {no: 5, track: 'Pigs on the Wing (Part Two)'}
    
    // animals.find(el => el['track'].includes('Horses'));
    // // undefined

    // Syntax
// array.findIndex((element, index, array) => {})

// array.findLastIndex((element, index, array) => {})

    // let animals = [
    //     {no: 1, track: 'Pigs on the Wing (Part One)'},
    //     {no: 2, track: 'Dogs'},
    //     {no: 3, track: 'Pigs (Three Different Ones)'},
    //     {no: 4, track: 'Sheep'},
    //     {no: 5, track: 'Pigs on the Wing (Part Two)'}
    // ];
    
    // animals.findIndex(el => el['track'].includes('Pigs')); // 0
    
    // animals.findLastIndex(el => el['track'].includes('Pigs')); // 4
    
    // animals.findIndex(el => el['track'].includes('Horses')); // -1

    // Syntax
// array.every((element, index, array) => {})

// array.some((element, index, array) => {})

//     let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn'];

// nobleGases.every(el => typeof el == 'string'); // true

// nobleGases.some(el => el == 'Ar'); // true

// nobleGases.some(el => el == 'Rn'); // false



// Syntax
// array.filter((element, index, array) => {})

    // let animals = [
    //     {no: 1, track: 'Pigs on the Wing (Part One)'},
    //     {no: 2, track: 'Dogs'},
    //     {no: 3, track: 'Pigs (Three Different Ones)'},
    //     {no: 4, track: 'Sheep'},
    //     {no: 5, track: 'Pigs on the Wing (Part Two)'}
    // ];
    
    // animals.filter(el => el['track'].includes('Pigs'));
    // [
    // {no: 1, track: 'Pigs on the Wing (Part One)'},
    // {no: 3, track: 'Pigs (Three Different Ones)'},
    // {no: 5, track: 'Pigs on the Wing (Part Two)'}
    // ]


    // Syntax
// array.sort()

// array.sort((a, b) => {})

    // let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn'];

// sorting in ascending order
// nobleGases.sort((a, b) => {
//    return a === b ? 0 : a > b ? 1 : -1; 
// }); 
// ['Ar', 'He', 'Kr', 'Ne', 'Rn', 'Xn']

// sorting in descending order
// nobleGases.sort((a, b) => {
//    return a === b ? 0 : a < b ? 1 : -1; 
// });
// ['Xn', 'Rn', 'Ne', 'Kr', 'He', 'Ar']


// let animals = [
//     {no: 1, track: 'Pigs on the Wing (Part One)'},
//     {no: 2, track: 'Dogs'},
//     {no: 3, track: 'Pigs (Three Different Ones)'},
//     {no: 4, track: 'Sheep'},
//     {no: 5, track: 'Pigs on the Wing (Part Two)'}
// ];

// let tracks = animals.map(el => el['track']);

// console.log(tracks); // ['Pigs on the Wing (Part One)', 'Dogs', 'Pigs (Three Different Ones)', 'Sheep', 'Pigs on the Wing (Part Two)']



// Syntax
// array.forEach((element, index, array) => {})

    // let animals = [
    //     {no: 1, track: 'Pigs on the Wing (Part One)'},
    //     {no: 2, track: 'Dogs'},
    //     {no: 3, track: 'Pigs (Three Different Ones)'},
    //     {no: 4, track: 'Sheep'},
    //     {no: 5, track: 'Pigs on the Wing (Part Two)'}
    // ];
    
    // animals.forEach(el => delete el['no']); // it returns undefined
    
    // console.log(animals); 
    // [
    //   {track: 'Pigs on the Wing (Part One)'},
    //   {track: 'Dogs'},
    //   {track: 'Pigs (Three Different Ones)'},
    //   {track: 'Sheep'},
    //   {track: 'Pigs on the Wing (Part Two)'}
    // ]


    // Syntax
// array.reduce((accumulator, element, index, array) => {}, initialValue)

// let animals = [
//     {no: 1, track: 'Pigs on the Wing (Part One)'},
//     {no: 2, track: 'Dogs'},
//     {no: 3, track: 'Pigs (Three Different Ones)'},
//     {no: 4, track: 'Sheep'},
//     {no: 5, track: 'Pigs on the Wing (Part Two)'}
// ];

// let countPigs = animals.reduce((count, el) => {
// 	return el['track'].includes('Pigs') ? count + 1 : count
// 	}, 0);

// console.log(countPigs); // 3

