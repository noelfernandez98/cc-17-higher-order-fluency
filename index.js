//1
// function pluralize(array) {
//     const array1 = array.map(x => x + 's');
//     return array1;
// }
// const animals =['cheetah','dog', 'cat', 'dodobird', 'bear', 'dolphin'];
// console.log(pluralize(animals));


//2
// function uppercase(array) {
//     const array1 = array.map( x => x[0].toUpperCase() + x.substring(1));
//     return array1;
// }
// const animals =['cheetah','dog', 'cat', 'dodobird', 'bear', 'dolphin'];
// console.log(uppercase(animals));



//3
// function longWords(array) {
//     const array1 = array.filter(x => x.length > 3);
//     return array1;
// }
// const animals =['cheetah','dog', 'cat', 'dodobird', 'bear', 'dolphin'];
// console.log(longWords(animals));


//4
// function shortWords(array) {
//     const array1 = array.filter(x => x.length < 5);
//     return array1;
// }
// const animals =['cheetah','dog', 'cat', 'dodobird', 'bear', 'dolphin'];
// console.log(shortWords(animals));



//5
// function oddLength(array){
//     const array1 = array.filter(x => x.length % 2 !== 0);
//     return array1;
// }
// const animals =['cheetah','dog', 'cat', 'dodobird', 'bear', 'dolphin'];
// console.log(oddLength(animals));



//6
// function longToShort(array){
//     const array1 = array.sort((a,b) => b.length - a.length);
//     return array1;
// }
// const animals =['cheetah','dog', 'cat', 'dodobird', 'bear', 'dolphin'];
// console.log(longToShort(animals));



//7
function sum(array){
    const array1 = array.reduce((a,b) => a + b);
    return array1;
}
const numbers = [22, 15, 1114, 416, 37, 4];
console.log(sum(numbers));