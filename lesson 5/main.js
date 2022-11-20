// let arr = [2,5,10,15];

// let result = arr.reduce((sum,current) => sum + current, 0 )
// console.log(result);

// let str =['Google','Yandex','Apple',"minecraft"]

// let resultArr = str.filter(item => item > 10)
// console.log resultAr

// let arr =[1,2,3]

// let arr2 = arr.concat((4,5));
// console.log(arr2);

// let str ='Hello World'
// let strArr = str.split(' ');
// console.log(strArr);

let nums = [4,5,,7,9,13,45];

let res = nums.filter((item,idx,arr) => {
    return item < 10
});

console.log(res);
