"use strict";

const array = [1, 2, 3, 1, 2, 3, 1, 8, 3, 4, 8];

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
//     let res=item*array[3];
//     return res;
// }
mult()
);
function mult(item,index=3,arr){
    
    return item==='vasya';
}
