let space = document.getElementsByClassName('name-tag');

for(let i = 0 ; i < space.length ; i++){
    let newP = document.createElement('p');
    newP.innerHTML = 'HELLO WORLD';

    space[i].appendChild(newP);
}
