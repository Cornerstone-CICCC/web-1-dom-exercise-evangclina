// YOUR CODE HERE

//EXERCISE 1
const btnOne = document.querySelector("#btn1")
const textOne = document.querySelector("#output1")

btnOne.addEventListener("click",()=>{
    textOne.style.color="red"
})

//EXERCISE 2

const btnTwo = document.querySelector("#btn2")
const textTwo = document.querySelector("#output2")
const span = document.createElement("span")

span.textContent = "Hello World"

btnTwo.addEventListener("click",() =>{
    textTwo.append(span)
})


//EXERCISE 3
const btnThree = document.querySelector("#btn3")
const p = document.querySelector("#output3 p")

btnThree.addEventListener("click",() =>{
    p.classList.remove("small-text")
})

//EXERCISE 4
const btnFour = document.querySelector("#btn4")
const paragraphs = document.querySelectorAll("#output4 p")

console.log(paragraphs)

btnFour.addEventListener("click",() =>{
    paragraphs.forEach(para =>{
        para.style.color = "red"
    })
})


//EXERCISE 5 
const btnFive = document.querySelector("#btn5")
const input = document.querySelector("#message")

btnFive.addEventListener("click", ()=>{
    const value = input.value
    console.log(value)
})