



    let form = document.querySelector('form');

    let username = document.querySelectorAll('input')[0];
    let password = document.querySelectorAll('input')[1];

    console.log(form,username,password);
    
    let eUsername = document.querySelectorAll('span')[0];
    let ePassword = document.querySelectorAll('span')[1];

    console.log(eUsername,ePassword);
    

    let storage = []

    let dataFromStorage = JSON.parse(localStorage.getItem("AccountDatabase"));


    if(dataFromStorage){
        storage = dataFromStorage
    }

    console.log(dataFromStorage);
    

    form.addEventListener('submit',(formOBJ)=>{

        eUsername.innerHTML = "";
        ePassword.innerHTML = "";
        let currentUsername = 0
        let usernameCheck = storage.find((e)=>{
            
            if(username.value == e.username){
                currentUsername = e;
                
                return e
            }

        })
        console.log("good");
        

        if(!(usernameCheck)){
            eUsername.innerHTML = '*Username does not exists...'
           formOBJ.preventDefault(); 
        }
        else if(password.value != currentUsername.pass){
            ePassword.innerHTML = '*Password is incorrect...'
            formOBJ.preventDefault();
        }
        else{
            let store = localStorage.setItem("LoggedInRiot-Valorant",JSON.stringify(currentUsername));
            let status = localStorage.setItem("status_login_valorant",true);
            console.log(store);
            

        }




    })




