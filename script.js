console.log("Hello world");

const front = document.getElementById("front");
const back = document.getElementById("back");
const circle = document.querySelectorAll("#dataCircle");
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

function updateData(btn) {
  btn.focus();
  let data = btn.dataset.num;
  backTxt.textContent = `You selected ${data} of 5`;
  console.log(backTxt);
}

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
    console.log(backTxt);
  });
});

submitBtn.addEventListener("click", toggle);

returnBtn.addEventListener("click", toggle);
