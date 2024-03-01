//getting the user input from the html
const yearInput=document.querySelector("#yearInput");
const searchBtn=document.querySelector("#searchBtn");
const rightArrow=document.querySelector("#right-arrow");
const leftArrow=document.querySelector("#left-arrow");
let nextArrow=document.querySelector("#next-arrow");
let prevArrow=document.querySelector("#previous-arrow");

let display="";
// Retreiving the last year stored by user from local storage
let storedYear=localStorage.getItem("SystemInput");
// if the year is not present in the local storage, then get the current year
if(!storedYear){
    storedYear= new Date().getFullYear();
}

// //earInput=storedYear;

// yearInput.value=storedYear;

searchBtn.addEventListener("click",function(event){
    event.preventDefault;
    let year = parseInt(yearInput.value.trim());
    calculateLeapYear(year);
    
});

leftArrow.addEventListener("click",function(event){ event.preventDefault;
    storedYear=previousLeap(storedYear);

});
rightArrow.addEventListener("click",function(event){
    event.preventDefault;
    storedYear=nextLeap(storedYear);


});



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
        result=`No, the year ${year} is not a leap year.`;
        }

    createDisplay(result,year);
    localStorage.setItem("User Input", year);

}

createDisplay=(result,year)=>{
    
    const resultDisplay=document.querySelector("#result");
    resultDisplay.textContent= "";
    const divCardTitle=document.createElement("div");
    divCardTitle.setAttribute("class","title");
    const yearTitle=document.createElement("h3");
    yearTitle.textContent=`Is the ${year}, a Leap year?`;
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




//Below function returns the previous leap year
const previousLeap=(year)=>{
    
    while(true){
        year--;
        if ((year%4===0 && year%100!== 0) ||(year%400===0)){
            prevArrow.setAttribute("style","display: block");
            nextArrow.setAttribute("style","display: none");
            prevArrow.textContent=`The Previous Leap Year was: ${year}`;
            localStorage.setItem("System Input", year);
            return year;
            
        }
    }

}

// Below function returns next Leap Year
const nextLeap=(year)=>{
    
    while(true){
        year++;
        if ((year%4===0 && year%100!== 0) ||(year%400===0)){
            prevArrow.setAttribute("style","display: none");
            nextArrow.setAttribute("style","display: block");
            nextArrow.textContent=`The Next Leap Year is: ${year}`;
            localStorage.setItem("System Input", year);
            return year;
        }
    }

}

