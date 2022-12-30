const closedFace = document.querySelector(".closed")
const openedFace = document.querySelector(".opened")

closedFace.addEventListener('click',() => {
    if(closedFace.classList.contains("active")){
        closedFace.classList.remove("active")
        openedFace.classList.add("active")
    }
})

openedFace.addEventListener("click", () => {
  if (openedFace.classList.contains("active")) {
    openedFace.classList.remove("active");
    closedFace.classList.add("active");
  }
});