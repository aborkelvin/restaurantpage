const content = document.querySelector('#content');

function creation(){
    while(content.firstChild){
        content.removeChild(content.firstChild);
    }
    let head = document.createElement('h1');
    head.textContent = 'Livia Eats' + '\n' + 'Restaurant'
    let detail = document.createElement('p');
    detail.textContent= 'Where taste and quality is the priority'
    let image  = document.createElement('img');
    image.src = "../src/img/foodtwo.jpg";
    let box = document.createElement('div');
    box.appendChild(head);
    box.appendChild(detail);
    box.classList.add('box');
    content.appendChild(image);
    content.appendChild(box);
    //content.appendChild(detail);

    console.log('Livia Eats' + '\n' + 'Restaurant')
}

export{ creation};