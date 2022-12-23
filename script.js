const front = document.getElementById("front");
const back = document.getElementById("back");
const circle = document.querySelectorAll(".circle");
const submitBtn = document.getElementById("submit");
const returnBtn = document.getElementById("returnBtn");
const backTxt = document.getElementById("backText");
let data;

/*

1) Select button and read data attribute of focused button, set to data variable and return data
2) Change backTxt to include new data variable
3) on SubmitBtn click, transition to back card
*/

// function

function toggle() {
  front.classList.toggle("hide");
  back.classList.toggle("hide");
}

// event listeners
circle.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.focus();
    let data = btn.dataset.num;
    backTxt.textContent = `You selected ${data} of 5`;
  });
});

submitBtn.addEventListener("click", toggle);

returnBtn.addEventListener("click", toggle);
