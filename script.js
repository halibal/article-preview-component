const btn = document.querySelector(".btn");
const share = document.querySelector(".share-container");
const arrow = document.querySelector(".arrow-down");
const date = document.querySelector(".date")
const fullDate = new Date()

let state = false;

const months = ["jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

btn.addEventListener("click", () => {
  if (!state) {
    share.style.zIndex = -1;
    arrow.style.background = "transparent";
    state = true;
  } else {
    state = false;
    arrow.style.background = "var(--clr-vgblue)";
    share.style.zIndex = 100;
  }
});



// adding current date inside the element with 'date' class
date.innerHTML = `${fullDate.getDate()} ${months[fullDate.getMonth()]} ${fullDate.getFullYear()}`
