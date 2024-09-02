const body = document.querySelector("body")
const rocket = document.querySelector(".rocket")
const timerel = document.querySelector(".timer > p")
const scoreel = document.querySelector(".score > p")
const item = document.querySelector(".item")

let timer = 0;
let yPos = 320;
let xPos = 450;
let score = 0;
let enemydelay = 0;
let score2 = 0;
let enemyi = 0;
let enemyxPos, enemyyPos;
// let xPos , yPos = 0;
let itemxPos, itemyPos;
let itemcontents = false
let enemycontents = false
// let xPos = 900;

let goRocket;
let key = "ArrowUp";

const render2 = () => {

    goRocket = requestAnimationFrame(render2)

    timer++
    timerel.textContent = Math.round(timer / 60)

    if(Math.round(timer / 60) % 5 == 0 && !itemcontents){
        itemcontents = true
        itemxPos = Math.round((Math.random() * (900 - 0)) + 0)
        itemyPos = Math.round((Math.random() * (700 - 0)) + 0)
        item.style.display = "block"
        item.style.left = `${itemxPos}px`
        item.style.bottom = `${itemyPos}px`
    }else if(!(Math.round(timer / 60) % 5 == 0) ){
        itemcontents = false
    }
    
    if((Math.abs((parseInt(rocket.style.left) - parseInt(item.style.left)))) < 50 && (Math.abs((parseInt(rocket.style.bottom) - parseInt(item.style.bottom)))) < 50 && item.style.display == "block"){
        score += 100
        score2 = score
        item.style.display = "none"
        itemcontents = false;
        scoreel.textContent = score 
    } 

    switch (key) {
        case "ArrowLeft":
            rocket.style.left = `${xPos}px`
            rocket.style.bottom = `${yPos}px`
            rocket.style.transform = `rotate(-90deg)`
    
            xPos -= 3;
            break;
        case "ArrowUp":
            rocket.style.left = `${xPos}px`
            rocket.style.bottom = `${yPos}px`
            rocket.style.transform = `rotate(0deg)`

            yPos += 3;
            break;
        case "ArrowDown":
            rocket.style.left = `${xPos}px`
            rocket.style.bottom = `${yPos}px`
            rocket.style.transform = `rotate(180deg)`

            yPos -= 3;
            break;
        case "ArrowRight":
            rocket.style.left = `${xPos}px`
            rocket.style.bottom = `${yPos}px`
            rocket.style.transform = `rotate(90deg)`

            xPos += 3;
            break;
    }
    const ground = document.querySelector(".ground");
    // const clientRect = ground.getBoundingClientRect();
    // const relativeTop = clientRect.top; //Viewport의 시작지점을 기준으로한 상대좌표 Y값
    // const relativeLeft = clientRect.left; // Viewport의 시작지점을 기준으로한 상대좌표 X값 
    // //x값은 left값과 같고 y값은 top의 값과 같다.
    // const relativeBottom = clientRect.bottom; // top(y) + height = bottom
    // const relativeRight = clientRect.right; // left(x) + wieght = right
    // console.log(clientRect, relativeTop)
        if(score2 > 0 ){
            score2 -= 20;
            let obj = {};
            enemyi++
            console.log(obj);
            obj[`${enemyi}`] = document.createElement("div")
            obj[enemyi].style.backgroundColor = "yellow"
            obj[enemyi].style.position = "absolute"
            obj[enemyi].style.width = "30px"
            obj[enemyi].style.height = "30px"
            switch (Math.round(Math.random() * 4)) {
                case 1:
                    enemyxPos = Math.round((Math.random() * 1795))
                    obj[enemyi].style.left = `${enemyxPos}px`
                    obj[enemyi].style.transition = "5s"
                    obj[enemyi].style.top = "0px"
                    body.appendChild(obj[enemyi])
                    setInterval(() => {
                        if(enemyxPos > 1795 / 2){
                            obj[enemyi].style.left = `${enemyxPos - 1795 / 2}px`
                            obj[enemyi].style.top = "2000px"
                        }else{
                            obj[enemyi].style.left = `${enemyxPos + 1795 / 2}px`
                            obj[enemyi].style.top = "2000px"
                        }
                    }, 1)
                    break;
                case 2:
                    enemyyPos = Math.round((Math.random() * 865))
                    obj[enemyi].style.left = `0px`
                    obj[enemyi].style.top = `${enemyyPos}px`
                    obj[enemyi].style.transition = "5s"
                    body.appendChild(obj[enemyi])
                    setInterval(() => {
                        if(enemyxPos > 1795 / 2){
                            // obj[enemyi].style.left = `${enemyxPos - 1795 / 2}px`
                            obj[enemyi].style.left = "2000px"
                            obj[enemyi].style.top = `${enemyxPos - 1795 / 2}px`
                            // obj[enemyi].style.top = "2000px"
                        }else{
                            // obj[enemyi].style.left = `${enemyxPos + 1795 / 2}px`
                            obj[enemyi].style.left = "2000px"
                            obj[enemyi].style.top = `${enemyxPos + 1795 / 2}px`
                            // obj[enemyi].style.top = "2000px"
                        }
                    }, 1)
                    break;
                case 3:
                    enemyxPos = Math.round((Math.random() * 1795))
                    obj[enemyi].style.left = `${enemyxPos}px`
                    obj[enemyi].style.transition = "5s"
                    obj[enemyi].style.bottom = "0px"
                    body.appendChild(obj[enemyi])
                    setInterval(() => {
                        if(enemyxPos > 1795 / 2){
                            obj[enemyi].style.left = `${enemyxPos - 1795 / 2}px`
                            obj[enemyi].style.bottom = "2000px"
                        }else{
                            obj[enemyi].style.left = `${enemyxPos + 1795 / 2}px`
                            obj[enemyi].style.bottom = "2000px"
                        }
                    }, 1)
                    break;
                case 4:
                    enemyyPos = Math.round((Math.random() * 865))
                    obj[enemyi].style.right = `0px`
                    obj[enemyi].style.transition = "5s"
                    obj[enemyi].style.top = `${enemyyPos}px`
                    body.appendChild(obj[enemyi])
                    setInterval(() => {
                        if(enemyxPos > 1795 / 2){
                            obj[enemyi].style.top = `${enemyxPos - 1795 / 2}px`
                            obj[enemyi].style.right = "2000px"
                        }else{
                            obj[enemyi].style.top = `${enemyxPos + 1795 / 2}px`
                            obj[enemyi].style.right = "2000px"
                        }
                    }, 1)
                    break;
        
                    
                }

            }

    if(Number.isInteger(Math.round(timer / 60))){

    }   

    if(xPos < 0 || xPos > 900 || yPos < 0 || yPos > 700){
        cancelAnimationFrame(goRocket);
    }
}

render2();

window.addEventListener("keydown", (e) => {
    if(e.key == "ArrowRight" || e.key == "ArrowLeft" || e.key == "ArrowUp" || e.key == "ArrowDown"){
        key = e.key;
    }
    // console.log(key);
})