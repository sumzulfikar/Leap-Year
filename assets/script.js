//getting the user input from the html
const yearInput=document.querySelector("#yearInput");
const searchBtn=document.querySelector("#searchBtn");

searchBtn.addEventListener("click",function(event){
    event.preventDefault;
    let userInput=yearInput.value.trim();
    userInput=parseInt(userInput);
    calculateLeapYear(userInput);
    
})

calculateLeapYear=(year)=>{
//The logic for calculating Leap Year if year is divisible by 4 
//exception is end of century is leap year when divisible by 400

    if(year%100!=0&&year%4==0){
        console.log(`Yes, ${year} is a Leap Year!`);
        
    }
    else if(year%100===0&&year%400===0){
        console.log(`Yes, ${year} is a century and a Leap Year!`);
    }

    else{ console.log(`No, the year is not a leap year.`);
        }
}
