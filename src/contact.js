const content = document.querySelector('#content');

function contact(){
    while(content.firstChild){
        content.removeChild(content.firstChild);
    }
    
}