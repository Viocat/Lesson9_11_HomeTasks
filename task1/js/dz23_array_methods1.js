"use strict";
//1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arrConcat = arr1.concat(arr2);
console.log(arrConcat);

//2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].

arr1.reverse();
console.log(arr1);

//my reverse (писалось во время урока)
let arrTestReverse = [1, 2, 3, 4, 5];
console.log(`before reverse: `, arrTestReverse);

function reverse(arr) {
    let b = 0;
    for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
        b = arr[i];
        arr[i] = arr[j];
        arr[j] = b;
    }
}

reverse(arrTestReverse);
console.log(`my reverse: `, arrTestReverse);


//3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.

arr1.reverse;
arr1.push(4, 5, 6);
console.log(arr1);

//4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

const arr3 = [1, 2, 3];
arr3.unshift(4, 5, 6);
console.log(arr3);

//5. Дан массив [‘js’, ‘css’, ‘jq’]. Выведите на экран первый элемент.
let arrFrEnd = ['js', 'css', 'jq'];
console.log(arrFrEnd[0]);

// 6. Дан массив [‘js’, ‘css’, ‘jq’]. Выведите на экран последний элемент.

console.log(arrFrEnd[arrFrEnd.length - 1]);

// 7. Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [1, 2, 3].

const arr4 = [1, 2, 3, 4, 5];
const newArr4 = arr4.slice(0, 3);
console.log(newArr4);

// 8. Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [4, 5].

const newArr4a = arr4.slice(3);
console.log(newArr4a);

//  Дан массив [1, 2, 3, 4, 5]. С помощью метода преобразуйте массив в [1, 4, 5].

arr4.splice(1, 2);
console.log(arr4);

//10. Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [2, 3, 4].

const arr5 = [1, 2, 3, 4, 5];
const newArr5 = arr5.slice(1, 4);
console.log(newArr5);

//11. Дан массив [1, 2, 3, 4, 5]. С помощью метода сделайте из него массив [1, 2, 3, ‘a’, ‘b’, ‘c’, 4, 5].

arr5.splice(3, 0, 'a', 'b', 'c');
console.log(arr5);

//12. Дан массив [1, 2, 3, 4, 5]. С помощью метода сделайте из него массив [1, ‘a’, ‘b’, 2, 3, 4, ‘c’, 5, ‘e’].

const arr6 = [1, 2, 3, 4, 5];
arr6.splice(1, 0, 'a', 'b');
arr6.splice(6, 0, 'c');
arr6.push('e');
console.log(arr6);

// 13. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.

const arr7 = [3, 4, 1, 2, 7];
arr7.sort();
console.log(arr7);

// 14. Дан массив с числами [5, 6, 7, 8, 9]. Найдите сумму этих чисел.

const arr8 = [5, 6, 7, 8, 9];
let sum = 0;
arr8.forEach(
    function (item) {
        sum += item;
    }
)
console.log(sum);

//15. Дан массив с числами [5, 6, 7, 8, 9]. Сделайте из него массив, состоящий из квадратов этих чисел.

arr8.forEach(
    function (item, index, array) {
        array[index] = Math.pow(item, 2);
    }
)

console.log(arr8);

//16. Дан массив с числами [1,-3, 5, 6,-7, 8, 9,-11]. Оставьте в нем только отрицательные числа.

let arr9 = [1, -3, 5, 6, -7, 8, 9, -11];
arr9 = arr9.filter((item) => item < 0);
console.log(arr9);

//17. Дан массив с числами [1,-3, 5, 6,-7, 8, 9,-11]. Оставьте в нем только четные числа.


let arr10 = [1, -3, 5, 6, -7, 8, 9, -11];
arr10 = arr10.filter((item) => item % 2 === 0);
console.log(arr10);

//18. Дан массив со строками [‘aaa’, ‘aaaqqq’, ‘zzzqq’, ‘zz’, ‘qsaa’, ‘q’, ‘az’]. Оставьте в нем только те строки, длина которых больше 5-ти символов.

let arr11 = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
arr11 = arr11.filter((item) => item.length > 5);
console.log(arr11);

//19. Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только подмассивы.

let arr12 = [1, 2, [3, 4], 5, [6, 7]];
arr12 = arr12.filter((item) => Array.isArray(item));
console.log(arr12);

//20. Дан массив с числами [5,-3, 6,-5, 0,-7, 8, 9]. Посчитайте количество отрицательных чисел в этом массиве.

const arr13=[5,-3, 6,-5, 0,-7, 8, 9];
const count=arr13.reduce(
    function(accum,currentValue){
        currentValue<0?accum++:'';
        return accum;
    },0
);

console.log(count);
