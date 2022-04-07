const content = document.querySelector('#content');

function creation(){
    while(content.firstChild){
        content.removeChild(content.firstChild);
    }
    let head = document.createElement('h1');
    let head3 = document.createElement('h1');
    head.textContent = 'Livia Eats'
    head3.textContent = 'Restaurant'
    let detail = document.createElement('p');
    detail.textContent= 'Welcome to Livia Eats, the home of fine bakeries, snacks and healthy meals,'
    +'where taste and quality is the priority'
    let image  = document.createElement('img');
    image.src = "../src/img/foodtwo.jpg";
    let box = document.createElement('div');
    box.appendChild(head);
    box.appendChild(head3);
    box.appendChild(detail);
    box.classList.add('box');
    content.appendChild(image);
    content.appendChild(box);
    //content.appendChild(detail);

    console.log('Livia Eats' + '\n' + 'Restaurant')
}

export{ creation};