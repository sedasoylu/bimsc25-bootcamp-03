


function breakfastClicked(){
    const breakfastDiv = document.getElementById("breakfastfoods")
    breakfastDiv.style.display = 'flex'
    const lunchDiv = document.getElementById("lunchFoods")
    lunchDiv.style.display = 'none'
}

const breakfastDiv = document.getElementById("breakfast")
breakfastDiv.addEventListener('click', () => breakfastClicked())


function lunchClicked(){
    const breakfastDiv = Document.getElementById("breakfastFoods")
    breakfastDiv.style.display = 'none'
    const lunchDiv = document.getElementById("lunchFoods")
    lunchDiv.style.display = 'flex'
}
const LunchDiv = document.getElementById("lunch")
LunchDiv.addEventListener('click', () => lunchClicked())
