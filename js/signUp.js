


//error msgs in span tags

let form = document.querySelector("form");


let firstName = document.querySelectorAll("input")[0];
let lastName = document.querySelectorAll("input")[1];
let UserName = document.querySelectorAll('input')[2]

let mobileNumber = document.querySelectorAll("input")[3];
let Email = document.querySelectorAll("input")[4];
let createPassword = document.querySelectorAll("input")[5];
let confirmPassword = document.querySelectorAll("input")[6];


console.log(document.querySelectorAll('input'));


let eFirst = document.querySelectorAll("span")[0];
let eLast = document.querySelectorAll("span")[1];
let eUsername = document.querySelectorAll('span')[2]
let eMobile = document.querySelectorAll("span")[3];
let eEmail = document.querySelectorAll("span")[4];
let epass = document.querySelectorAll("span")[5];
let ecpass = document.querySelectorAll("span")[6];

console.log(document.querySelectorAll('span'));


let testFirst,testLast,testUsername,testMobile,testEmail = undefined



let storage = [];

let dataFromStorage = JSON.parse(localStorage.getItem("AccountDatabase"))

if(dataFromStorage){
    storage = dataFromStorage
}

console.log(dataFromStorage,storage);

  
console.log('good');


form.addEventListener("submit",(e)=>{

   

    let mobileCheck = storage.find((e)=>{
            if(e.phone == mobileNumber.value){
                return e
            }
    })


    let flag = true;
    //first name validation
    let regx=/^[a-zA-Z]{1,17}$/;
   if(firstName.value==""){
    eFirst.innerHTML = "*Enter the first name";
    flag = false;
    testFirst = undefined;
    e.preventDefault();
   }
   else if(regx.test(firstName.value)){
    eFirst.innerHTML = "";
    testFirst = firstName.value

   }
   else{
    eFirst.innerHTML = "*invalid first name"
    flag = false;
    testFirst = undefined;
    e.preventDefault();
   }

   //last name validation
   if(lastName.value==""){
    eLast.innerHTML = "*Enter the last name";
    flag = false;
    testLast = undefined
    e.preventDefault();
   }
   else if(regx.test(lastName.value)){
    eLast.innerHTML = "";
    testLast = lastName.value;
   }
   else{
    eLast.innerHTML = "*invalid last name "
    flag = false;
    testLast = undefined;
    e.preventDefault();
   }

//user name validation

  
    let usernameCheck = storage.find((e)=>{

        if(e.username === UserName.value){
            return e
        }

    })


    if(usernameCheck){
        eUsername.innerHTML = '*This Username already exists...'
        flag = false;
        testUsername = undefined;
        e.preventDefault()
       }
    
   

    




//++++++++++++++++++______________
   //email validation


    let emailCheck = storage.find((e)=>{
        if(e.email === Email.value){
            return e
        }


    })

     if(emailCheck ){
        eEmail.innerHTML = '*Email already exists...'
        flag = false;
        testEmail = undefined;
        e.preventDefault();
       }




   

  else if(Email.value == ""){
    
    eEmail.innerHTML = "Enter the email";
    flag = false;
    testEmail = undefined;

    e.preventDefault();
   }
   else{
    eEmail.innerHTML = "";
    testEmail = Email.value;
   }

   //Mobile Number Validation
    let regxmob = /^[6-9][0-9]{9}$/;
    if(mobileCheck){
        eMobile.innerHTML = "Mobile Number already exists .."
        e.preventDefault();
        flag = false;
    }
   else if(mobileNumber.value == ""){
    eMobile.innerHTML = "enter the mobile number"
    flag = false;
    testMobile = undefined;
    e.preventDefault();
   }
   else if(regxmob.test(mobileNumber.value)){
    eMobile.innerHTML = "";
    testMobile = mobileNumber.value;
   }
   else {
    eMobile.innerHTML = "*invalid mobile Number";
    flag = false;
    testMobile = undefined;

    e.preventDefault();
   }
   

   //create Password Validation
   let regxpass = /^[a-zA-Z0-9@#$]{6,25}$/;



   

   if(createPassword.value ==""){
    epass.innerHTML = "create the password";
    flag = false;
    e.preventDefault();
   }
   else if(regxpass.test(createPassword.value)){
    epass.innerHTML = "";
   }
   else{
    epass.innerHTML = "*invalid Password";
   
    flag = false;
     e.preventDefault();
   }

   //confirm Password validation
   if(confirmPassword ==""){
    ecpass.innerHTML = "enter the password"
    flag = false;
    e.preventDefault();
   }
   else if(createPassword.value == confirmPassword.value){
    ecpass.innerHTML = "";
   }
   else{
    ecpass.innerHTML = "password not match";
    flag = false;
    e.preventDefault();
   }

  
console.log('good');






   //store data in local storage

  


   
if(flag){
   let details = {
    first : firstName.value,
    last : lastName.value,
    username:UserName.value,
    email: Email.value,
    phone: mobileNumber.value,
    pass: createPassword.value
   }

   storage.push(details);
   console.log("good");
   
   
   localStorage.setItem("AccountDatabase", JSON.stringify(storage));
//    console.log(storage);
   
//    localStorage.removeItem("details")
   
}

})











