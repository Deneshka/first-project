//1)
// function func (nums) {
//     let last = nums.pop()+1
//     let push = nums.push(last)
//     console.log(nums)
// }
//  console.log(func([1,2,3]))

//2)
    // let arr = [true, false, true, true,false,true, false, false];
    // let truth = arr.filter(function(value){return value});
    // console.log(truth.length);


//3)
let array = [1,1,2,2,3,3,4,4];
let dubl = [];
array.forEach((element) => {
    if (!dubl.includes(element)) {
        dubl.push(element);
    }
});
console.log(dubl)