// // let biografi = [
// //     {
// //         id: 1,
// //         surname:"Nazirbek Uulu",
// //         name:"Alisher",
// //         age: 21,
// //         region:"Batken",
// //         wife:"No merried",
// //         profession:"Developer",
// //         house:"Not",
// //         car:"Yes",
// //
// //
// //     hobby :{
// //             one:"football",
// //         two:"tennis",
// //         three:"chess"
// //     },
// //     friends :{
// //         one:"arstan",
// //         two:"belek",
// //         three:"ysman"
// //     },
// //
// //
// //     }
// // ]
// // console.log(biografi)
// // 1. Создайте массив чисел и используйте цикл for для вывода каждого элемента.
// //
// // let arr = [1,2,3]
// // for (let i = 0; i < arr.length; i++){
// //     console.log(arr[i])
// // }
// // console.log(arr)
// // 2. Создайте объект с несколькими ключами и значениями, затем используйте цикл for...in для перебора ключей.
// //
//
// // 3. Используйте метод map для удвоения каждого элемента в массиве чисел.
// //
// // let number = [134,34,2,74,43,864,26,297]
// // let result = number.map(el =>{
// //     return el * 2
// // })
// // console.log(result)
//
//
// // 4. Используйте метод filter, чтобы отфильтровать четные числа из массива.
// //
// // let numbers = [12,17,23,33,46,8,195,677,924,1,66]
// // let result = numbers.filter(el =>{
// //     return el % 2 === 0
// // })
// // console.log(result)
// // 5. Создайте функцию, использующую метод reduce, чтобы найти сумму всех чисел в массиве.
// //
// // let number = [20,400,75,385,90,1000,430,670]
// // let result = number.reduce((acc,el) =>{
// //     return acc + el
// //     console.log(acc, '=> acc')
// //     console.log(el, '=> el')
// // })
// // console.log(result)
// // let arr = [2,54,2,5,3,7,9]
// // function test (a){
// //     a.reduce((acc,el)=>{
// //         console.log(acc + el)
// //     })
// //
// // }
// // test(arr)
// // 6. Отсортируйте массив чисел по возрастанию с помощью sort.
// //
// // let manes = ['wgyukshk','sdbjsbjkd','ofhsndlds','apjnds','qpcakvyb','pqfnsbje']
// // let result = manes.sort((a,b) =>{
// //     if (a > b){
// //         return -1
// //     }else {
// //         return  1
// //     }
// // })
// // console.log(result)
// // 7. Используйте метод Math.random() для генерации случайного числа.
// //
// // let number = [10]
// // let result = number.map(el =>{
// //     return Math.random(el)
// // })
// // console.log(result)
// // console.log(Math.round(Math.random()*10))
// // 8. Преобразуйте строку в число, используя метод parseInt или parseFloat.
// //
// // let num = '5'
// // console.log(parseInt(num))
// // 9. Создайте функцию, которая принимает число и возвращает его квадрат.
// //
// // function text (one,two) {
// //     console.log(one ** 2)
// //     console.log(two ** 2)
// // }
// // text (12,8)
// // 10. Используйте метод Array.isArray() для проверки, является ли переменная массивом.
// //
// // // 11. Найдите максимальное число в массиве с помощью метода Math.max().
// // let number = [1,33,783,309,89,765,45,78,2,9,]
// // console.log(Math.max(number.map(el=>el)))
// //
// // 12. Используйте метод Array.from() для создания массива из строки.
// // let a = 'aruvnxdj'
// // let b = Array.from(a)
// // console.log(b)
// // 13. Создайте функцию, которая принимает массив чисел и возвращает новый массив с кубами этих чисел.
// //
// // function test (one,two) {
// //     console.log(one ** 3)
// //     console.log(two ** 3)
// // }
// // test (3,7)
// // 14. Используйте метод String.fromCharCode() для преобразования числа в соответствующий символ Unicode.
// //
// // 15. Найдите среднее значение чисел в массиве.
// //
// // let names = ['srgkefc','lvrvk','wyseng','pwfevsf','hgdtqetr','qwerty']
// // let result = names.map(el =>{
// //     return
// // })
// // console.log(result)
// // 16. Преобразуйте массив строк в одну строку с помощью метода join.
// // //
// // let str = ['tershc','jsdgf','acjndsy','zignls','pdgrbnkn']
// // let result = str.map(el =>{
// //     return el.join('')
// // })
// // console.log(result)
// // 17. Используйте метод Array.prototype.every() для проверки, все ли элементы массива больше нуля.
// //
// // 18. Создайте функцию, которая принимает строку и возвращает её длину.
// //
// // function arr (one,two){
// //     console.log(arr.length)
// // }
// // arr (23578,2893)
// // 19. Используйте метод Array.prototype.some() для проверки, есть ли хотя бы один четный элемент в массиве.
// //
// // 20. Округлите число до ближайшего целого с помощью метода Math.round().
// // let  numbers = [32,5,7,2,5,93,75,8]
// // let result = numbers.map(el => {
// //     if ( el % 2 ===0){
// //         return Math.round(el)
// //     }
// // })
// // console.log(result)
//
// // На входе два одномерных массива. В каждом массиве всегда по два элемента.
// // Верните третий массив результат которого будет сумма элементов предыдущих
// // function test (a,b){
// //     let num = []
// //     for (let i = 0 ; i < a.length ; i++){
// //         console.log(a[i]+b[i])
// //     }
// //     return num
// // }
// // console.log(test([2,4],[1,3]))
// // Input: [2,4], [1,3]
// // Actions:
// //     Output: [3,7]
// //
// // Input: [1,7], [9,3]
// // Actions:
// //     Output: [10, 10]
// // Task 2
// // Напишите функцию, которая принимает массив чисел
// // и возвращает массив этих чисел умноженных на два
//
//
// }
// // Input: [1,2,3,4,5]
// // Output: [2,4,6,8,10]
// //
// // Input: [7,14]
// // Output: [14,28]
// // Task 3 -----
// //     Напишите функцию, которая принимает массив объектов с полем id. Например [[{id: '100'}, {id: 2}]] и возвращает массив этих id
// // Input: [{id: 1},{id: 2},{id: 3},{id: 4}]
// // Output: [1,2,3,4]
// let arr = [{id: 1},{id: 2},{id: 3},{id: 4}]
// function test (arr){
//     return arr.map(el =>{
//         return el.id
//     })
// }
// console.log(test(arr))
// // // Input: [{id: true}]
// // // Output: [true]
// let str = [{id: true}]
// function task (str){
//     return str.map(el =>{
//         return el.id
//     })
// }
// console.log(task(str))
// // Task 4
// // Напишите функцию, которая принимает массив чисел и возвращает массив строк по шаблону <h1>{number}</h1>
// // Input: [1,2]
// // Output: ['<h1>1</h1>','<h1>2</h1>']
// //
// let num = [1,2]
// function name (num){
//     return num.map(el =>{
//         return `<h1>${el}</h1>`
//     })
// }
// console.log(name(num))
// // Input: ['Ivan']
// // Output: ['<h1>Ivan</h1>']
// let take =  ['Ivan']
// function  name (take){
//     return take.map(el =>{
//         return `<h1>${el}</h1>`
//     })
// }
//
// console.log(name(take))
// // Task 5
// // Напишите функцию, которая принимает массив строк и возвращает массив строк с четным количеством букв
// // Input: ['ab','abc','abcd']
// // Output: ['ab','abcd']
// //
// let frt = ['ab','abc','abcd']
// function text (frt){
//     return frt.filter(el =>{
//         if (el.length % 2 === 0){
//             return el
//         }else {
//             return false
//         }
//     })
// }
//
// console.log(text(frt))
// // Input: ['abc','abcde']
// // Output: []
// let  ali = ['abc','abcde']
// function sher (ali){
//     return ali.filter(el =>{
//         if (el.length % 2 === 0){
//             return el
//         }
//     })
// }
//
// console.log(sher(ali))
// // Task 6
// // Напишите функцию, которая принимает массив чисел и возвращает массив чисел умноженных на два, которые делятся на 10 без остатка
// // Input: [1,2,3,7,10,5]
// // Output: [20,10]
// let a = [1,2,3,7,10,5]
// function num (a){
//     return a.map(el =>{
//         if ( el ** 2){
//             return el
//         } else return false
//     })
//
// }
//
// console.log(num(a))
// // Input: [1,2,3,7,9,4]
// // Output: []
// // Task 7
// // Напишите функцию, которая принимает массив булевых значений и возвращает массив только со значениями true
// // Input: [true,false,true,true]
// // Output: [true,true,true]
// //
// let bool = [true,false,true,true]
// function task (bool){
//     return bool.filter(el =>{
// return el % 2 !== 0
//     })
// }
// console.log(task(bool))
// // Input: [false,true]
// // Output: [true]
// let look = [false,true]
// function  test (look) {
//     return look.filter(el =>{
//         return el % 2 !== 0
//     })
// }
// console.log(test(look))
// // Task 8
// // Напишите функцию, которая принимает массив значений в т.ч и значения undefined и возвращает массив только без значений undefined
// // Input: [true, false, true,true, undefined, true, undefined]
// // Output: [true, false, true, true, true]
// // //
// const  task =  [true, false, true,true, undefined, true, undefined]
// const  a = []
// const test = (b) => {
//     b.filter(el => {
//         if ( el !== undefined)
//             a.push(el)
//     })
// }
// test(task)
// console.log(a)

// // Input: [undefined, true, undefined]
// // Output: [true]
// const bool = [undefined, true, undefined]
// const t = []
// const  task = (a) => {
//     a.filter(el => {
//         if (el !== undefined)
//             t.push(el)
//
//     })
// }
//
// task(bool)
// console.log(t)
// // Task 9
// // Напишите функцию, которая принимает массив чисел и возвращает их сумму. Использовать reduce
// // Input: [1,2,3,4,5]
// // Output: 15
// // //
// let number = new Array(100).fill(0).map((el,idx) => idx + 1)
// const test =(a) => {
//    let task = a.reduce((acc,el) => {
//         return acc + el
//     },0)
//     console.log(task)
// }
// test(number)
// // // Input: [2, 11, 5]
// // // Output: 18
// let num =  [2, 11, 5]
// const task = (b) => {
//     let a = b.reduce((acc,el) => {
//         return acc + el
//     },0)
//     console.log(a)
// }
// task(num)
// // Task 10
// // Напишите функцию, которая принимает массив булевых значений и возвращает результат логического И над ними. Использовать reduce
// // Логическое И - это операция &&
// // Input: [true,true,true,true]
// // Output: true
// //
// let arr =  [true,true,true,true]
// const  task = () => {
//     let num = arr.reduce((acc,el) => {
//         if ( el === true && acc === true){
//             return el
//         }else {
//             return false
//         }
//     })
//     console.log(num)
// }
// task(arr)
// // // Input: [true,false,true]
// // // Output: false
// let srt = [true,false,true]
// const test = () => {
//     let arr = srt.reduce((acc,el) => {
//         if ( el === true && acc === true){
//             return el
//         }else {
//             return false
//         }
//     })
//     console.log(arr)
// }
// test(srt)
// // Task 11
// // Напишите функцию, которая принимает массив чего угодно и возвращает объект с полями {field1, field2, field3, field4}. Использовать reduce. Готовим баночки и не отчаиваемся. Будет 🔥
// // Input: [true,1,'wow','you are smart, bro']
// // // Output: {field1: true, field2:1, field3: 'wow', field4: 'you are smart, bro'}
// let tip = [true,1,'wow','you are smart, bro']
// const test = () => {
//    let num = tip.reduce((acc,el,idx) => {
//        acc ['field' + (idx + 1)] = el
//        return acc
//    },{})
//     console.log(num)
// }
// test()

// // Task 12 ------
// //     Напишите функцию, которая принимает объект, как аргумент и возвращает новый объект. Только с полями, у которых тип значения - строка;
// // Input: { name: 'Baha', isAdmin: true }
// // Actions:
// //     Output: { name: 'Baha' }
// let obj = {
//     name: 'name',
//     age: 21,
//     tell: false,
//     test:'object'
// }
// const task = () => {
//     for (let key in obj){
//         if (typeof obj[key] === 'string'){
//             console.log(key, obj[key])
//         }
//     }
// }
// task()
// // Input: { isAdmin: true }
// // Actions:
// //     Output: {}
