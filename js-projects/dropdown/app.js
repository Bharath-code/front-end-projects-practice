const dropDownBtn = document.querySelector("#btn")
const dropDownContainer = document.querySelector(".dropdown")
const dropArrow = document.querySelector("#arrow")

const toggleDropDown = function(){
    dropDownContainer.classList.toggle("show")
    dropArrow.classList.toggle("arrow")
};

dropDownBtn.addEventListener('click', (e)=> {
    e.stopPropagation();
    toggleDropDown();
})  

// closing the dropdown when clicking outside the dropdown or when clicking the child of an dropdown
document.documentElement.addEventListener("click", () => {
  if (dropDownContainer.classList.contains("show")) {
    toggleDropDown();
  }
});