

// Accessing the elements of the page

//PLAY NOW button

let playnowBTN = document.querySelector('#nava-play-now');

let playnow_POPUP = document.querySelector('#playnow-popup-signin-login')


let temp = document.querySelector('#onlyfor-popup');

let temp2 = temp.querySelector('div');


console.log(temp,temp2);


console.log(playnow_POPUP);


playnowBTN.addEventListener('click',(e)=>{

    if(playnowBTN.innerHTML == 'PLAY NOW')
   temp2.style.display = 'block';


    

})


//CLose Button

let closeBTN = temp.querySelector('span')

console.log(closeBTN);

closeBTN.addEventListener('click',(e)=>{

    temp2.style.display = 'none';

})










