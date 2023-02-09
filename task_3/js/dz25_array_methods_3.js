"use strict";

const array = [1, 2, 3, 1, 2, 3, 1, 8, 3, 4, 8];
console.log(array);

// Вам нужно написать функцию indexOf

function indexof(array, element, index = 0) {
    if (index >= array.length) return -1;
    if (index === -1) index = 0;
    for (index; index < array.length; index++) {
        if (array[index] === element) return index;
        if (index === array.length - 1) return -1;
    }

}

let result = indexof(array, 5, );
console.log(result);

//Вам нужно написать функцию lastIndexOf

function lastIndexof(array, element, index = array.length - 1) {
    if (index >= array.length) return -1;
    if (index < 0) index = array.length - 1;
    for (index; index >= 0; index--) {
        if (array[index] === element) return index;
        if (index === 0) return -1;
    }

}

result = lastIndexof(array, 3, );
console.log(result);

//Вам нужно написать функцию find():

function fInd(array, cb) {

    let fail = undefined;
    for (let i = 0; i < array.length; i++) {
        if (cb(array[i], i, array)) return array[i];
    }

    return fail;
}

console.log(fInd(array, findNum))

function findNum(item, index, arr) {
    return item === 4;
}

//Вам нужно написать функцию findIndex:

function fIndIndex(array, cb) {
    let fail = -1;
    for (let i = 0; i < array.length; i++) {
        if (cb(array[i], i, array)) return i;
    }

    return fail;
}

console.log(fIndIndex(array, searchItem))

function searchItem(item, index, arr) {
    return item % 4 === 0;
}

//Вам нужно написать функцию includes:

function includes(array, element, fromIndex = 0) {
    for (let i = fromIndex; i < array.length - 1; i++) {
        if (array[i] === element) return true;
    }
    return false;
}

console.log(includes(array, 4, 3));

//Вам нужно написать функцию every:

function every(array, cb){
    for(let i=0;i<array.length-1;i++){
        if(!cb(array[i],i,array)) return false;
    }
    return true;
}

const fives=[5,5,1,5,5,5]
console.log(every(fives, checkFives ));

function checkFives(item,index,array){
    return item===5;
}

//Вам нужно написать функцию some:

function some(array, cb){
    for(let i=0;i<array.length-1;i++){
        if(cb(array[i],i,array)) return true;
    }
    return false;
}

const lessThan5=[1,2,3,4,4,3,2,1]
console.log(some(array, isBiggerThan5 ));
console.log(some(lessThan5, isBiggerThan5));

function isBiggerThan5(item,index,array){
    return item>5;
}
