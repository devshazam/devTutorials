```js
ARRAYS =================================================

Array.isArray() -  вернет true если это массив
        const fruits = ["Banana", "Orange", "Apple", "Mango"];
        let result = Array.isArray(fruits); // return true

LOOPS:
        map() -> return NEW
                const numbers = [65, 44, 12, 4];
                const NEW = numbers.map((elem, index) => { return elem * 10}) // return [650, 440, 120, 40]

        reduce() -> return NEW 
                const numbers = [175, 50, 25];
                const NEW = numbers.reduce((total, num) => total - num, 0); // return 100


ADDING
        push
        unshift
        concat


CUTING
        splice(start, end) - вернет массив элементов от start до end
                const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
                const citrus = fruits.slice(1, 3); // return ['Orange', 'Lemon']
        pop() // удалит последний элемент массива
                let arr = ['a', 'b', 'c', 'd', 'e'];
                let x1 = arr.pop();
                arr // return ['a', 'b', 'c', 'd']
                x1 // return 'e'

FILTER
        sort() - Сортирует массив по умолчанию .sort() если массив начинается с 1 - иначе:
                var numArray = [140000, 104, 99];
                numArray.sort(function(a, b) {
                return a - b;
                });
        every() - все елементы должны удовлетворять условию ф-ции =>(true/false)
                const ages = [32, 33, 16, 40];
                ages.every(age => age >18) // return false

        filter() - вернет массив только с елементами прошедшими тест
                const ages = [32, 33, 16, 40];
                ages.filter(age => age >= 18); // return [32, 33, 40]

        indexOf() - вернет индекс первого совпадения
                const fruits = ["Banana", "Orange", "Apple", "Mango"];
                let index = fruits.indexOf("Apple"); // return 2


OBJECTS =============================================

let obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); //  ['0', '1', '2']
console.log(Object.values(obj)); // ['a', 'b', 'c']
console.log(Object.entries(obj)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// ForIn 
    const person = {fname:"John", lname:"Doe", age:25};
    let tXt = "";
    for (let x in person) {
        txt += person[x] + " ";
    } // return "John Doe 25 "
