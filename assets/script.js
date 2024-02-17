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
let result="";
    if(year%100!=0&&year%4==0){
        result=`Yes, ${year} is a Leap Year!`;
        
    }
    else if(year%100===0&&year%400===0){
        result=`Yes, ${year} is a century and a Leap Year!`;
    }

    else{ 
        result=`No, the year is not a leap year.`;
        }

    createDisplay(result,year);

}

createDisplay=(result,year)=>{
    const resultDisplay=document.querySelector("#result");
    const divCardTitle=document.createElement("div");
    divCardTitle.setAttribute("class","title");
    const yearTitle=document.createElement("h3");
    yearTitle.textContent=year;
    console.log(yearTitle);
    divCardTitle.append(yearTitle);
    const divCardResult=document.createElement("div");
    const isLeapYear=document.createElement("p");
    divCardResult.setAttribute("class","message");
    isLeapYear.textContent=result;
    console.log(isLeapYear);
    divCardResult.append(isLeapYear);
    resultDisplay.appendChild(divCardTitle);
    resultDisplay.appendChild(divCardResult);
    console.log(resultDisplay);

}