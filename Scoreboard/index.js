let count1 = 0
let count2 = 0
let addOne = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
function home1(){
    count1 += 1
    addOne.textContent = count1
}
function home2(){
    count1 += 2
    addOne.textContent = count1
}
function home3(){
    count1 += 3
    addOne.textContent = count1
}

function guest1(){
    count2 += 1
    guestScore.textContent = count2
}
function guest2(){
    count2 += 2
    guestScore.textContent = count2
}
function guest3(){
    count2 += 3
    guestScore.textContent = count2
}
