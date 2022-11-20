//1)



//2
function MyMax(myarr){
    let al = myarr.length;
    maximum = myarr[al-1];
    while (al--){
        if(myarr[al] > maximum){
            maximum = myarr[al]
        }
    }
            return maximum;
};
function arrayMin(array){
    var min = array[0];
    for(var i = 0; i < array.length; i++){
        if(min < array[i]){
            min = min;
        }else if (min > array[i]){
            min = array[i + 1];
        }else if (min == array[i]){
            min = min;
        }
    }
    return min;
}
let myArray = [1, 5, 6, 2, 3];
let max = MyMax(myArray);
let min = arrayMin(myArray)
console.log([min,max])

//3)


let st =[1, "a", "b", 0, 15]
st = st.replace(String);
console.log(st)