var arr = [1, 2, 3, 4, 3]

// arr.forEach(element => {
//     console.log(element+' Hello')
// });

// arr.forEach(function(val){
//     console.log(val+val);
// });
// var arr2 = arr.map(function(val){
//     return val*val
// })
// console.log(arr2)

// var a2 = arr.map((value)=>{
//     return value**2;
// });
// console.log(a2);


var a = [2, 4, 5, 3, 1, 2, 31, 55, 32, 56];

var filt = a.filter((val)=>{
    if(val>=5)
        return true;
    else    return false;
})
console.log(filt);

// var filtered = a.filter(function(value){
//     if (value%2==0)
//         return true;
//     else return false;
// })
// console.log(filtered);

// var found = arr.find(function(val){
//     if(val==3)
//         return val;
// })
// console.log(arr.indexOf(found));

// // OBJECTS

// {}// Blank Object

// var b ={
//     name: "Shumail",
//     age: 12,
//     da: 'asd'
// }// Object
// Object.freeze(b);//No more changes
// b.age=25;
// console.log(b);

// //Asynchronous JS CODING
// async function abcd(){
//     var blob = await fetch('https://randomuser.me/api');
//     var res = await blob.json();

//     console.log(res);
// }

// abcd();