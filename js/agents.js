


let agentContent = document.querySelector('section');

console.log(agentContent);

let actualSelectedAgentIndex = undefined;


async function agentsfunc(params) {

    let agentDataFetch = await fetch('../json/game-info.json')

    let convertAgentDataFetch = await agentDataFetch.json();
    console.log(convertAgentDataFetch);
    

    //array for fetching the data

    let arraylocalAgents = []


    convertAgentDataFetch.agents.filter((e)=>{
        agentContent.innerHTML += ` <div class = 'selecting-agent'>
        <div>
        <img src="${e.props.pageProps.page.favicon.icon[0].icon}" alt="">
        </div>
        <h3>${e.props.pageProps.page.title}</h3>
    </div>`


    //adding into local agents array
    arraylocalAgents.push(e.props.pageProps.page.title)


    })
  
// agents popup -screen





//fetching the selected agent

console.log(arraylocalAgents);

let selectingAgent = agentContent.querySelectorAll('.selecting-agent');

console.log(selectingAgent);



// arraylocalAgents.filter((e)=>{

//     selectingAgent[tempIndex++].addEventListener('click',(e)=>{
           
            
//         let h3InSelectAgent = e.srcElement
//             console.log(h3InSelectAgent);
            
//         // let currentSelectedAgent = convertAgentDataFetch.agents[]

        


//     })

    
// })

selectingAgent.forEach((div_button)=>{

    div_button.addEventListener('click',(e)=>{
      

        let actualH3 = div_button.querySelector('h3')
        
       actualSelectedAgentIndex  = arraylocalAgents.indexOf(actualH3.innerHTML);

            console.log(actualSelectedAgentIndex);
            
            callingThePageForThatAgent()



          

           

            


    })
    


})




 


 let h3InSelectAgent = agentContent.querySelector('.selecting-agent>h3')
 console.log(h3InSelectAgent);
 





// popup_agents_nav.innerHTML = `  <div id="popup-agents">

    //         <div class="popup-agents-main">
    //         <img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/28db4af74acd1d78ddba82ed127a99731261b9c8-5120x1772.png?auto=format&fit=fill&q=80&w=1899" alt="">
    //     </div>
        
    //     <div class="agents-abilities">
    //         <h3> <i> BRIMSTONE </i></h3>
    //         <!-- automatic info div tag below this -->
    //             <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolor illo molestias accusantium assumenda? Corrupti quasi placeat commodi aspernatur autem fugit, repudiandae nostrum velit, numquam molestiae aut eum culpa beatae.</div>
    //         <div class="role-icon">
                
    //             <div class = 'role-cont'>
    //             <!-- js part i tag -->

    //              <span>ROLE</span>
    //              <p>SENTINEL</p>
    //             </div>
    //             <div class="special-abilities">
    //                     <h3>SPECIAL ABILITIES</h3>
    //                     <div>
    //                         <div>
    //                             <img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/d7e00a4ad8a1a01b2edcb9fc1193d05e4e50248f-128x128.png" alt="">
    //                         </div>
                            
    //                         <div>
    //                             <img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/d7e00a4ad8a1a01b2edcb9fc1193d05e4e50248f-128x128.png" alt="">
    //                         </div>
    //                     </div>
    //             </div>

    //         </div>
    //     </div>

    //     <div class="agent-ability-video">
    //         <video src="https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/9df59d490062acceb7c6ca32a3650b55718381f7.mp4" autoplay loop muted></video>
            
    //         <h5>INCIDNeary</h5>
    //         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam eos, facilis ducimus quis iure dignissimos provident et id obcaecati laborum totam consequuntur expedita perspiciatis veritatis repellat quam facere eligendi quo!</p>
    //     </div>
        
    // </div>`

    function callingThePageForThatAgent() {

        let index =  actualSelectedAgentIndex;
        let screenwidth = screen.availWidth;

        console.log(screenwidth);
        
     
        let popup_agents_nav = document.getElementById('sticky-along-with-nav-bar')
     
        popup_agents_nav.innerHTML = `  <div id="popup-agents">
                            <span><i class="fa-solid fa-xmark"></i></span>
                 <div class="popup-agents-main">
                 <img src="${convertAgentDataFetch.agents[index].props.pageProps.page.blades[1].backdrop.background.url}?auto=format&fit=fill&q=80&w=1899" alt="">
             </div>
             
             <div class="agents-abilities">
                 <h3> <i> ${convertAgentDataFetch.agents[index].props.pageProps.page.blades[1].title.toUpperCase()} </i></h3>
                 <!-- automatic info div tag below this -->
                     ${convertAgentDataFetch.agents[index].props.pageProps.page.blades[1].description.body}
                 <div class="role-icon">
                     
                     <div class = 'role-cont'>
                     <!-- js part i tag -->
     
                      <span>ROLE</span>
                      <p>${convertAgentDataFetch.agents[index].props.pageProps.page.blades[1].role.roles[0].name.toUpperCase()}</p>
                     </div>
                     <div class="special-abilities">
                             <h3>SPECIAL ABILITIES</h3>
                             <div>
                                 <div id = 'special-ability-1'>
                                    <img src="${convertAgentDataFetch.agents[index].props.pageProps.page.blades[2].groups[0].thumbnail.url}" alt="">
                                </div>
                                
                                <div id = 'special-ability-2'>
                                    <img src="${convertAgentDataFetch.agents[index].props.pageProps.page.blades[2].groups[1].thumbnail.url}" alt="">
                                </div>
                                <div id = 'special-ability-3'>
                                    <img src="${convertAgentDataFetch.agents[index].props.pageProps.page.blades[2].groups[2].thumbnail.url}" alt="">
                                </div>
                                <div id = 'special-ability-4'>
                                    <img src="${convertAgentDataFetch.agents[index].props.pageProps.page.blades[2].groups[3].thumbnail.url}" alt="">
                                </div>
                             </div>
                     </div>
     
                 </div>
             </div>
     
             <div class="agent-ability-video">  
             
                 <video src="${convertAgentDataFetch.agents[index].props.pageProps.page.blades[2].groups[0].content.media.sources[0].src}" autoplay loop muted></video>
                 
                 <h5>${convertAgentDataFetch.agents[index].props.pageProps.page.blades[2].groups[0].content.title}</h5>
                 <p>${convertAgentDataFetch.agents[index].props.pageProps.page.blades[2].groups[0].content.description.body}</p>
             </div>
             
         </div>`

         closing_popup_agents(popup_agents_nav)
         specialAbilities();
     
     }

     function specialAbilities(params) {


        let special_abilities = document.querySelector('.special-abilities>div');

        let special_ability_Collection = special_abilities.querySelectorAll('div');
                console.log(special_ability_Collection);


        let agent_ability_video = document.querySelector('.agent-ability-video');

        let agent_ability_video_element = agent_ability_video.querySelector('video');

       let agent_ability_video_name = agent_ability_video.querySelector('h5');

       let agent_ability_video_info = agent_ability_video.querySelector('p');

        


        let index = actualSelectedAgentIndex;

      

        





special_ability_Collection.forEach((ability)=>{

    
  

    ability.addEventListener('click',(e)=>{
       
        

        if(ability.id == 'special-ability-1'){
        agent_ability_video_element.src = `${convertAgentDataFetch.agents[index].props.pageProps.page.blades[2].groups[0].content.media.sources[0].src}`
        agent_ability_video_name.innerHTML = `${convertAgentDataFetch.agents[index].props.pageProps.page.blades[2].groups[0].content.title}`
        agent_ability_video_info.innerHTML = `${convertAgentDataFetch.agents[index].props.pageProps.page.blades[2].groups[0].content.description.body}`
        }

        else if(ability.id == 'special-ability-2'){
            agent_ability_video_element.src = `${convertAgentDataFetch.agents[index].props.pageProps.page.blades[2].groups[1].content.media.sources[0].src}`
            agent_ability_video_name.innerHTML = `${convertAgentDataFetch.agents[index].props.pageProps.page.blades[2].groups[1].content.title}`
        agent_ability_video_info.innerHTML = `${convertAgentDataFetch.agents[index].props.pageProps.page.blades[2].groups[1].content.description.body}`
      
        }
        else if(ability.id == 'special-ability-3'){
            agent_ability_video_element.src = `${convertAgentDataFetch.agents[index].props.pageProps.page.blades[2].groups[2].content.media.sources[0].src}`
            agent_ability_video_name.innerHTML = `${convertAgentDataFetch.agents[index].props.pageProps.page.blades[2].groups[2].content.title}`
        agent_ability_video_info.innerHTML = `${convertAgentDataFetch.agents[index].props.pageProps.page.blades[2].groups[2].content.description.body}`
        }
        else{
            agent_ability_video_element.src = `${convertAgentDataFetch.agents[index].props.pageProps.page.blades[2].groups[3].content.media.sources[0].src}`
            agent_ability_video_name.innerHTML = `${convertAgentDataFetch.agents[index].props.pageProps.page.blades[2].groups[3].content.title}`
        agent_ability_video_info.innerHTML = `${convertAgentDataFetch.agents[index].props.pageProps.page.blades[2].groups[3].content.description.body}`
        }


    })
    
   

})




      

    
     }


    
    
}





function closing_popup_agents(popup_agents_nav) {


    let span  = document.querySelector('#popup-agents>span');

    span.addEventListener('click',(e)=>{

        popup_agents_nav.innerHTML = "";



    })
    
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





agentsfunc()











    


