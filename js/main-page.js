



 let statusOfLoggedIn = false;

statusOfLoggedIn = JSON.parse(localStorage.getItem("status_login_valorant"));



let temp3 = document.querySelector('#nav-right-section')

let play_now_button_nav = temp3.querySelector('button')





if(statusOfLoggedIn){

    statusOfLoggedIn = false;
    localStorage.setItem("status_login_valorant",false);

let loggedInUser = JSON.parse(localStorage.getItem("LoggedInRiot-Valorant"))

console.log(loggedInUser);






if(loggedInUser.username.length <=8){
play_now_button_nav.innerHTML = `${loggedInUser.username}`

}else{
    play_now_button_nav.innerHTML = 'MyAccount';
    
}





play_now_button_nav.style.backgroundColor = '#282828'
play_now_button_nav.style.color = '#bdbcb7'






}


//LOGOUT


// if(play_now_button_nav.innerHTML != 'PLAY NOW'){
//     localStorage.setItem("status_login_valorant",false);
//     play_now_button_nav.innerHTML = 'PLAY NOW';
// }




//for default main-page nav-bar

let nav_options_section = document.querySelector('#nav-valo-logo')


nav_options_section.addEventListener('click',(e)=>{


    window.location.href = '../html/main-page.html';


})





let view_maps_section_button = document.querySelector('#your-maps-button')

if(view_maps_section_button != null){
view_maps_section_button.addEventListener('click',(e)=>{


    window.location.href = '../html/map.html';



})

}





//for logout dropdown

// let dropdown_logout = document.querySelector('#options-right-desk')
// dropdown_logout.innerHTML += `<div id="logout">LOG OUT</div>` ;





















