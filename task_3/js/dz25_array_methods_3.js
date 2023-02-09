"use strict";

const array = [1, 2, 3, 1, 2, 3, 1, 8, 3, 4, 8];

// // Вам нужно написать функцию indexOf

// function indexof(array, element, index = 0) {
//     if (index >= array.length) return -1;
//     if (index === -1) index = 0;
//     for (index; index < array.length; index++) {
//         if (array[index] === element) return index;
//         if (index === array.length - 1) return -1;
//     }

// }

// let result = indexof(array, 5, );
// console.log(result);

// //Вам нужно написать функцию lastIndexOf

// function lastIndexof(array, element, index = array.length - 1) {
//     if (index >= array.length) return -1;
//     if (index < 0) index = array.length - 1;
//     for (index; index >= 0; index--) {
//         if (array[index] === element) return index;
//         if (index === 0) return -1;
//     }

// }

// result = lastIndexof(array, 3, );
// console.log(result);

//Вам нужно написать функцию find
// function isFunction(functionToCheck)  {
//     var getType = {};
//     return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
// }

function fInd(array, cb) {
    //______________________________________
    console.log(typeof(cb));
    if(typeof(cb)==='function'){
        alert('function');
        // for (let i = 0; i < array.length; i++) {
        //     cb(array[i],i,array)?result=array[i]:result=undefined;
        //     if(result!=undefined) return result;
        // }
    }else{
        alert('not function');

    }
    //______________________________________

   
}

fInd(array,
//     function(array,item){
//     let res=item*array;
//     return res;
// }
mult()
);
function mult(item,index=3,arr){
    
    return item==='vasya';
}