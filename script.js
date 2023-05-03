// შექმენით ფუნქცია, რომელსაც გადავცემთ n რაოდენობის მნიშვნელობას და დააბრუნოს მხოლოდ დადებითი რიცხვების ჯამს:
// 2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8;

function sumFunc(...numbers){
    let sum=0;
    for(item of numbers){
        if(item >0){
            sum+=item
        }
    }
    return sum;
}

console.log(sumFunc(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8))
console.log("----")

// ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი:
// 10, 50, 6, 7, 8, 11, 6, 3, 9

let result = (...number) => {
    sum=0;
    number.forEach(element => {
        sum+=element
    });
    return sum;
}

console.log(result( 10, 50, 6, 7, 8, 11, 6, 3, 9))
console.log("----")

// et user = {
//     firstname: 'giorgi',
//     lastname: 'saakadze',
//     age: 32,
//     isloggedin: true
//   }
      
//   ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ: 'giorgi saakadze') თუ isloggedin არის true და false თუ isloggedin ფროფერთი არის false;
let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
  }
  
function getName(){
   return user.isloggedin==true? `${user.firstname} ${user.lastname}`: "false"
}
console.log(getName())
console.log("----")

// შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:

function getMax(...number){
    let max=0
    number.forEach(item => {
        if(item>max){
            max=item
        }
    })
    return max
}

let myMax=getMax(1,8,12,0,12,2,3,1,4,1,66789,7564,32,32,1111,558,3)
console.log(myMax)
console.log("----")

// დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიიღებს ერთ რიცხვს და გამოთვლის გადაცემული მნიშვნელობა კენტია თუ ლუწი; თუ ლუწია დააბრუნოს - ‘this number is even; თუ კენტია დააბრუნოს - this number is odd;

let evenOrOdd = function(x){
    let result= x%2==0 ? "This is even": "This is odd"
    return result
}

let myOddNumber = evenOrOdd(79)
console.log(myOddNumber)
let myEvenNumber = evenOrOdd(344)
console.log(myEvenNumber)
console.log("----")

// მოცემულია მასივი
// let array = ['html', 'css', 'python', 'javascript', 'bootstrap'];
// for ორივე გზით და foreach-ის საშუალებით გამოიტანეთ მხოლოდ ის სიტყვებუ რონლის სიმბოლოების რაოდენობდა მეტია 4 და მოიცავს ‘av’ სიმბოელობის tთანმიმდევრობას; - include უნდა გამოიყენოთ


let array = ['html', 'css', 'python', 'javascript', 'bootstrap'];
console.log("----1----")
array.forEach(item =>{
    if(item.length>4 && item.includes("av")){
        console.log(item)
    }
  
})
console.log("----2----")
for(item of array){
    if(item.length>4 && item.includes("av")){
        console.log(item)
    }
}
console.log("----3----")
for(let i =0; i< array.length; i++){
    if(array[i].length>4 && array[i].includes("av")){
        console.log(array[i])
    }
}


console.log("----")
// მოცემულია მასივი:
// let array = [1,2,3,4,5];
// for ციკლის საშუალებით მიიღეთ reverse ვერისია, ანუ 5,4,3,2,1

let array1 = [1,2,3,4,5];

console.log("--1--")
for (let i=0; i<array1.length; i++){
    console.log(array1[array1.length-i-1])
}

console.log("--2--")
for(index in array1){
    console.log(array1[array1.length-index-1])
}

console.log("----")
// ფუნქციის საშუალებით გამოთვალეთ უსერის ასაკი და დაამატეთ შემდეგი პირობა, თუ გადაცემული ასაკი მეტია 18- ზე დააბრუნეთ - სრულლოვანი, თუ ნაკელებია  დააბრუნეთ არასწულწლოვანი. 
// ეს ამოცანა დაწერეთ arrow function-ით და if ის პირობა ჩაწერეთ ახალი სინტაქსით;

let isAdult = (currentYear, birthYear) => {
    let age= currentYear-birthYear
    let getIsAdult = age>=18 ? "User is adult" : "User is not adult"
    return getIsAdult
}

console.log(isAdult(2023,1995))