//1)
//  let mas1 = [0,1,2,13,4,15];
//  let mas2 = [1,4,13,92,15];
//  function getArrEqual(mas1, mas2) {
//          let newArr = [];
//          for (let i = 0; i < mas2.length; i++) {
//              for (let j = 0; j < mas1.length; j++) {
//                  if(mas1[j] === mas2[i]){
//                      newArr.push(mas1[j]);
//                  }
//          }
//       }
//       return newArr;
//  }
//  console.log(getArrEqual(mas1,mas2));




// //2)
//  let arr = [true, false, true, true,false,true, false, false];
//      let truth = arr.filter(function(value){return value});
//      console.log(truth.length);

//3)
 let ar = [[1,2,3],[4,5],[6],[7,8,9]];
 ar=ar.flat(1)
 console.log(ar);


