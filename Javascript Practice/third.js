// function countvowels (str){
//     count = 0;
//     for(i of str)
//         if( i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u')
//             count++;
//     console.log(count)
// }


// countvowels("Shumail")

// num = [1, 4, 5, 6, 7];
// num.forEach(element => {
//     console.log(element*element);
// });

// marks = [97, 64, 32, 49 ,99 ,96, 86];
// arr = marks.filter((val) => {
//     return val>90;
// });

// console.log(arr)

n = prompt('ENter N');

let arr = [];

for(i=1;i<=n;i++)
{
    arr[i-1]= i; 
}
console.log(arr);
sum = arr.reduce((prev, curr)=>{
    return prev+curr;    
});

console.log(sum);

prod = arr.reduce((pre, cur)=>{
    return pre*cur;
});
console.log(prod);