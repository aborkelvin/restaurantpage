const content = document.querySelector('#content');

function menu(){
    while(content.firstChild){
        content.removeChild(content.firstChild);
    }
    let menubox = document.createElement('div');
    menubox.classList.add('menubox');
    let menu1 = document.createElement('div');
    let menu2 = document.createElement('div');
    let menu3 = document.createElement('div');
    let head2 = document.createElement('h2')
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');
    let head3 = document.createElement('h2');
    let head4 = document.createElement('h2')
    menu1.classList.add('menulist');
    menu2.classList.add('menulist');
    menu3.classList.add('menulist');
    head2.textContent = 'Bacon Cheeseburger';
    head3.textContent = 'Chipotle Veggie burger';
    head4.textContent = 'Butter Chicken Twin Burgers';
    p2.textContent = 'Chilli lamb pattie with roasted bell pepper dip, onions, tomatoes and lettuce.';
    p3.textContent = 'Chipotle chilli and a dash of lime, topped off with lettuce, tomatoes, gherkins and served with hot chips.';
    p4.textContent = 'Made with chicken tikka coated in spicy, delicious makhani gravy filled inside a burger bun'
    menu1.appendChild(head2);
    menu2.appendChild(head3);
    menu3.appendChild(head4);
    menu1.appendChild(p2) 
    menu2.appendChild(p3) 
    menu3.appendChild(p4) 
    menubox.appendChild(menu1);
    menubox.appendChild(menu2);
    menubox.appendChild(menu3);
    let image  = document.createElement('img');
    image.src = "../src/img/foodtwo.jpg";
    content.appendChild(image);
    content.appendChild(menubox);
    console.log('work?');
}

export{ menu};