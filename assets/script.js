//getting the user input from the html
const yearInput=document.querySelector("#yearInput");
const searchBtn=document.querySelector("#searchBtn");

searchBtn.addEventListener("click",function(event){
    event.preventDefault;
    let userInput=yearInput.value.trim();
     userInput=parseInt(userInput);
  
    
})

