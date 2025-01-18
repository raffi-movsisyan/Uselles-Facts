let url = 'https://uselessfacts.jsph.pl/random.json'

let block = document.getElementById('block');
let but = document.getElementById('but');
let header = document.getElementById('header');
let blockroot = document.getElementById('blockroot');


async function getFact() {
    block.innerHTML = '';
    try{
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        let fact = document.createElement('p');
        fact.innerText = data.text
        block.appendChild(fact);
    }
    catch(error){
        console.log(error);
    }
}

getFact();  

but.addEventListener('click',function(){
    getFact();  
})

if(block.innerHTML === ''){
    but.innerText = 'Get Fact';
}