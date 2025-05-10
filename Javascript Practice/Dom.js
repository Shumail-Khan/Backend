let btn = document.createElement('button');
btn.innerText = 'Click ME!';

// btn.onclick= ()=>{
//     alert('Button was Clicked')
// };

btn.addEventListener('click', () => {alert("Button was Clicked")})


btn.style.backgroundColor = 'red';
btn.style.color = 'white';
btn.style.height = '100px';
btn.style.width = '100px';

b = document.querySelector("body").prepend(btn);


// Q2

let para = document.querySelector('p');

p = para.classList.add('newclass')


let but = document.getElementById('b2');
let bod = document.querySelector('body');
but.addEventListener('click', ()=>{
    bod.style.color='white';
    bod.style.backgroundColor='black';
})