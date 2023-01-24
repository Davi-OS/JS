const paragrafos = document.querySelector('.paragrafos');
let ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
let backgroudBody = estilosBody.backgroundColor;

for(let p of ps){
    p.style.backgroundColor = backgroudBody;
    p.style.color = 'white';
}