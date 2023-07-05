// declaring the variables
let submitbtn = document.getElementById("submit-button");
let rating = document.querySelectorAll("span");
let mainBox = document.getElementById("main-rating-box");
let result = document.getElementById("result-box");
let numberOfStars = document.getElementById("noOfStars");
let value;
let resultText;

// looping through all numbers to get the values 
rating.forEach(item => {
    item.addEventListener("click", function () {
        value = item.textContent;
    })
})

// print the result values
const getResult = () => {
    mainBox.classList.add("remove");
    result.classList.remove("remove");
    resultText = `You have selected ${value} of 5 stars`
    numberOfStars.innerText = resultText;
}

// event listener to get result
submitbtn.addEventListener("click", getResult);

