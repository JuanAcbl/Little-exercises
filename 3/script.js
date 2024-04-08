//1
let arr1=[];
    if (arr1.length<10){
    for (let i = 0; i < 10; i++) {
        arr1[i] = Math.floor(Math.random() * 100);
    }
    }
    console.log(arr1);


//2

    for (let i = 2; i < 7; i++) {
        arr1[i] = Math.floor(Math.random() * 100);
    }
    console.log(arr1);

//3
    console.log(arr1[5])
//4 
    console.log(arr1[2])
//5
    if (arr1.length<11){
    for (let i = 6; i < 88; i++) {
        arr1[i] = Math.floor(Math.random() * 100);
    }
    }
    console.log(arr1);
//6
console.log(arr1[6])
//7
console.log(arr1[1])
//8
console.log(arr1[10])
//9
let sum =arr1[5]+arr1[6];
arr1[2]= sum;

console.log(arr1[5],"+",arr1[6],"=",arr1[2])
//10
console.log(arr1.length)//(88)

arr1.splice(arr1.length-1,1)

console.log("New letgth = ",arr1.length)//New letgth =  87

console.log(arr1)//

//11
arr1[arr1.length]=Math.floor(Math.random() * 100);
console.log(arr1)

    

