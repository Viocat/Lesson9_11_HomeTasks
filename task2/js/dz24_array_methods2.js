"use strict";

//1. Создайте массив arr = [‘a’, ‘b’, ‘c’, ‘d’] и с его помощью выведите на экран строку ‘a+b, c+d’.

const arr=['a','b','c','d'];
console.log(`${arr.slice(0,2).join('+')}, ${arr.slice(2).join('+')}`);

// 2. Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной

let arr2=[2, 5, 3, 9];
let result=res(arr2);
function res(array){
    return array.splice(0,2).reduce((item1,item2)=>item1*item2)+array.reduce((item1,item2)=>item1*item2)
}

//3. Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.

const arr3=[ [1, 2, 3], [4, 5, 6], [7,8,9] ];

console.log(arr3.slice(1,2).shift().shift());

//4. Дан объект {js:[‘jQuery’, ‘Angular’], php: ‘hello’, css: ‘world’}. Выведите с его помощью слово ‘jQuery’.

let fe={
    js:['jQuery', 'Angular'], 
    php: 'hello',
    css: 'world'
}

console.log(fe.js.shift());

//5. Заполните массив следующим образом: в первый элемент запишите ‘x’, во второй ‘xx’, в третий ‘xxx’ и так далее.

const fillArray=function(elCount){
    const array=[];
    for(let i=0,el='x';i<elCount;i++,el+='x'){
        array.push(el);
    }
    return array;
}
let array=fillArray(5);
console.log(array)

//6. Заполните массив следующим образом: в первый элемент запишите ‘1’, во второй ’22’, в третий ‘333’ и так далее.

const fillArray_v2=function(elCount){
    const array=[];
    for(let i=0,el=1;i<elCount;i++,el++){
        let elInput='';
        for(let j=0;j<el;j++){
            elInput+=el;
        }
        array.push(elInput);
    }
    return array;
}
let array2=fillArray_v2(5);
console.log(array2)

//7. Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым — сколько элементов должно быть в массиве. Пример: arrayFill(‘x’, 5) сделает массив [‘x’, ‘x’, ‘x’, ‘x’, ‘x’].

const arrayFill=function(item,itemCount){
    const array=[];
   for(let i=0;i<itemCount;i++){
    array.push(item);
   }
    return array;
}
let array3=arrayFill('x',5);
console.log(array3)

//8. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

let array4=[1,5,5,4,1,2,6,8];

//Вариант 1:
const elCount=function(arr){
    for(let i=0,j=0;i<arr.length;i++){
        j+=array4[i]
        if(j>10){
            return i+1;
        }
    }
}

let res=elCount(array4);
console.log(res);

//Вариант 2:

let res2=array4.reduce(function (accumulator, currentValue){
    accumulator.sum+=currentValue;
    if(accumulator.sum<11){
        accumulator.counter++;
    }
    return accumulator;
},{sum:0, counter:1}
)
console.log(res2.counter);

//9. Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.
console.log(array4);
function reverse(arr){
    for(let i=0,j=arr.length-1;i<=j;i++,j--){
        let tempContainer=arr[i];
        arr[i]=arr[j];
        arr[j]=tempContainer;
    }
}
reverse(array4);
console.log(array4);

//10. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

let array5=[[1, 2, 3], [4, 5], [6]];
let elSum=array5.flat(Infinity).reduce((acc,item)=>acc+=item);
console.log(elSum);

//11. Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

let array6=[[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

let elSum1=array6.flat(Infinity).reduce((acc,item)=>acc+=item);
console.log(elSum1);
