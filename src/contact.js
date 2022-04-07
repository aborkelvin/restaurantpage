const content = document.querySelector('#content');

function contact(){
    while(content.firstChild){
        content.removeChild(content.firstChild);
    }
    let image  = document.createElement('img');
    image.src = "../src/img/foodtwo.jpg";
    let inputname = document.createElement('input');
    let inputname2 = document.createElement('input');
    let inputmail = document.createElement('input');
    let inputtext = document.createElement('textarea');
    Object.assign(inputname,{
       type: 'text',
      className: 'inputclass',
      placeholder:'First Name',
    })
    Object.assign(inputname2,{
        type: 'text',
       className: 'inputclass',
       placeholder:'Last Name',
     })
    Object.assign(inputmail,{
       type: 'email',
       className: 'inputclass',
       placeholder:'Email',
     })
     Object.assign(inputtext,{
       className: 'inputclass',
       placeholder:'Your Message',
     })

     content.appendChild(image);
     content.appendChild(inputname);
     content.appendChild(inputname2);
     content.appendChild(inputmail);
     content.appendChild(inputtext);

}

export{contact}