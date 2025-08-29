
const heartCount = document.getElementById("heartCount");
const heartBtn = document.querySelectorAll(".heartBtn");
let heartCounter = 0;

heartBtn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    heartCounter++;
    heartCount.innerText = heartCounter;
  });
});


const totalCoin = document.getElementById("total-coin");
let coin = 100;
totalCoin.innerText = coin; 


const historyContainer = document.querySelector("#call-history-list");
const clearBtn = document.querySelector("#clear-history");


const buttons = document.querySelectorAll(".call-btn");

buttons.forEach(function (button) {
  button.addEventListener("click", function(e){
    e.preventDefault();
    const card = this.closest(".cc");
    if (coin < 20) {
      alert("Need 20 coin for call!!");
      return;
    }

     alert(card.querySelector("h1").innerText + " " + card.querySelector("h3").innerText)
    coin -= 20;
    totalCoin.innerText = coin;

    const callInfo = {
      name: card.querySelector("h1").innerText,
      time: new Date().toLocaleTimeString(),
    };

    
    const li = document.createElement("li");
    li.className = "p-2 border-1 border-gray-300 flex justify-between";
    li.innerHTML = `<span class="font-semibold">${callInfo.name}</span> <span class="text-gray-600">${callInfo.time}</span>`;
    historyContainer.appendChild(li);
  });
});


clearBtn.addEventListener("click", function(e){
  e.preventDefault()
  historyContainer.innerHTML = "";
});


 var copyButtons = document.querySelectorAll(".copy-btn");
var copyCounter = 0;
var copyCountSpan = document.getElementById("copy-count");
copyButtons.forEach(function(btn) {
  btn.addEventListener("click", function(e) {
    e.preventDefault();
    var card = this.closest(".cc");
    var number = card.querySelector(".num").innerText;

    navigator.clipboard.writeText(number)
      .then(function() {
        // Increment copy counter
        copyCounter++;
        if (copyCountSpan) {
          copyCountSpan.innerText = copyCounter;
        }
        
      })
  });
});






