//1)
// let a = (5)
// console.log(a*60)


//2)
function arr(num,length){
    let result = [];
    
    for(let i = 1; i <= result.length ; i++){
        result.push(num*num)
    }
    return result;
}
console.log(arr(7,5))




//3) 
 function averageСost(arr) {
     var sum = 0;
     for(var i = 0; i < arr.length; i++) {
         sum += arr[i];
     }
     return sum / arr.length;
  }
 
  console.log(averageСost([2,4,6]));



 function findSubarrays(nums) {
     let mp = [];

     for(let i = 0; i < nums.length; i++){
              if(mp[nums[i] + nums[i + 1]]) 
                //   return true;

               mp[nums[i] + nums[i + 1]] = 1;
       } 
      return false;    
       
 };

