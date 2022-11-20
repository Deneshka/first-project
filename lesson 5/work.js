  let arr =[true, false, true, false]
  for(let i = 0; i < arr.length; i++){
      if(arr[i] === false){
          arr[i] = "🍧"
      }
  }
  console.log(arr)



 let str ='Hello World'
 let strArr = str.split(' ');
 console.log(str[1].length);



  let sum = [5,1,0,19];
  let summa = sum.reduce((sum,current) => sum + current, 0 )
  console.log(summa);



 let nums = [4,5,,7,9,13,45];

 let res = nums.filter((item,idx,arr) => {
     return item < 10
 });

 console.log(res);