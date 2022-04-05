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
    //let head2 = document.createElement('h2')
    menu1.classList.add('menulist');
    menu2.classList.add('menulist');
    menu3.classList.add('menulist');
    //head2.textContent = 'Bacon Cheeseburger'
    menu1.textContent = 'lorem ipsun snf sma essd ernfjdx edjnds'
    menu2.textContent = 'lorem ipsun snf sma essd ernfjdx edjnds'
    menu3.textContent = 'lorem ipsun snf sma essd ernfjdx edjndsow more than ever, your online restaurant menu' 
    +'ustomers with a user-friendly website and online ordering platform — even as we begin to emerge from t'
    
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