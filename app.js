/*let h1= document.createElement(h1);
let h1text= document.createTextNode('This is an h1');
let container= document.createElement('div');
h1.appendChild(h1text);
container.appendChild(h1);
document.body.appendChild(container);*/

document.addEventListener('DOMContentLoaded',function(){
    let h1= document.createElement(h1);
    let h1text= document.createTextNode('This is an h1');
    let container= document.createElement('div');
    let divText= document.createTextNode('this is the div');
    let divh1 = container.setAttribute('class','h1');
    let divh1Text = document.createTextNode('this is the h1');
    container.appendChild(setAttribute)
    container.appendChild(divText);
    h1.appendChild(h1text);
    container.appendChild(h1);
    document.body.appendChild(container);
});