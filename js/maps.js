


    let map_view = document.querySelector("#map-view");

    console.log(map_view);


    let all_maps = map_view.querySelector('.all-maps');

    console.log(all_maps);


    //current index of every map

    let arrayOfIndexCurrent_View_ON_MAP = [];

    let tempMapNames = []
    
    let universalIndex = 0;

    let currentUniversalArraySizeOfImages = undefined;




    
    
    //fetching all data

async function viewing_maps(params) {

    let fetching_data_maps = await fetch("../json/game-info.json")

    let convertMAPDataFetch = await fetching_data_maps.json();
    console.log(convertMAPDataFetch);





    //storing the index of current view on maps

    

    convertMAPDataFetch.maps.filter((currentMap)=>{
        
        arrayOfIndexCurrent_View_ON_MAP.push(0)


    })

    console.log(arrayOfIndexCurrent_View_ON_MAP);
    




    //carousel

   

    
  
    

    convertMAPDataFetch.maps.map((e)=>{
        //for storing map name
        tempMapNames.push(e.header.title);

        all_maps.innerHTML += `<div class = 'javascript-view-maps'>
                    <h3>${e.header.title}</h3>
                    <p style="color: black;">${e.header.subtitle}</p>
                    <div>
                        <div class="main-img-map">
                            <img src="${e.groups[0].thumbnail.url}" alt="">
                            <i class="fa-solid fa-angle-left"></i>
                            <i class="fa-solid fa-angle-right"></i>
                        </div>
                        

                    </div>
                
                </div>`




    })
    

    
  

        // let img = all_maps.querySelector('img');


    let onImageLeftButtons = all_maps.querySelectorAll('.fa-angle-left');

    let particular_img_tag_array = all_maps.querySelectorAll('img');
    
    

    

    onImageLeftButtons.forEach((lbutton)=>{

      

        lbutton.addEventListener('click',(e)=>{

          let currentIndex = undefined;
          
          if(universalIndex == 0){
            currentIndex = universalIndex
          }else{
          currentIndex =  currentIndexesForEachMaps(lbutton.parentElement.parentElement.parentElement.querySelector('h3').innerText)
          }

          let currentArraySizeOfImages = undefined;

          if(currentUniversalArraySizeOfImages != undefined){
            currentArraySizeOfImages = currentUniversalArraySizeOfImages
          }else{ 
              
            let title = lbutton.parentElement.parentElement.parentElement.querySelector('h3').innerText;
            currentArraySizeOfImages =  convertMAPDataFetch.maps[tempMapNames.indexOf(title)].groups.length;

            
            
          }
            
            currentIndex--
    
            if(currentIndex < 0){
                currentIndex = currentArraySizeOfImages - 1;
            }
        
            // particular_img_tag_array[5].src = temp[index]
           
            
            particular_map_image(lbutton.parentElement,currentIndex)

            universalIndex = currentIndex;
    
        })
  

    })


    function particular_map_image(currentLocationMapOnPage,currentIndex) {

        
        
        let img = currentLocationMapOnPage.querySelector('img');

        img.src = convertMAPDataFetch.maps[tempMapNames.indexOf(currentLocationMapOnPage.parentElement.parentElement.querySelector('h3').innerText)].groups[currentIndex].thumbnail.url;

        updatingCurrentIndexesForEachMaps(currentLocationMapOnPage.parentElement.parentElement.querySelector('h3').innerText,currentIndex)

    }
       







let onImageRightButtons = all_maps.querySelectorAll('.fa-angle-right');

onImageRightButtons.forEach((rbutton)=>{

    rbutton.addEventListener('click',(e)=>{

      
        
        let currentIndex = undefined;
              
        if(universalIndex == 0){
          currentIndex = universalIndex
        }else{
            currentIndex =  currentIndexesForEachMaps(rbutton.parentElement.parentElement.parentElement.querySelector('h3').innerText)
        }
    
        let currentArraySizeOfImages = undefined;
    
        if(currentUniversalArraySizeOfImages != undefined){
          currentArraySizeOfImages = currentUniversalArraySizeOfImages
        }else{ 
            
          let title = rbutton.parentElement.parentElement.parentElement.querySelector('h3').innerText;
          currentArraySizeOfImages =  convertMAPDataFetch.maps[tempMapNames.indexOf(title)].groups.length;
    
          
          
        }
    
    
        currentIndex++
        currentIndex %=currentArraySizeOfImages;
    
        particular_map_image(rbutton.parentElement,currentIndex)
    
        universalIndex = currentIndex;
    
    
    
    })


})



function currentIndexesForEachMaps(mapName) {

  
   return arrayOfIndexCurrent_View_ON_MAP[tempMapNames.indexOf(mapName)];


}

function updatingCurrentIndexesForEachMaps(mapName,index) {

    arrayOfIndexCurrent_View_ON_MAP[tempMapNames.indexOf(mapName)] = index;

   
    

}








}



function username() {

    let loggedInUser = JSON.parse(localStorage.getItem("LoggedInRiot-Valorant"))

    console.log(loggedInUser);
    
    
    
    let temp3 = document.querySelector('#nav-right-section')

let play_now_button_nav = temp3.querySelector('button')
    
    
    if(loggedInUser.username.length <=8){
    play_now_button_nav.innerHTML = `${loggedInUser.username}`
    
    }else{
        play_now_button_nav.innerHTML = 'MyAccount';
        
    }
    
    
    
    
    
    play_now_button_nav.style.backgroundColor = '#282828'
    play_now_button_nav.style.color = '#bdbcb7'
    
    
    


}

username()






viewing_maps()
    



