function ClearStartScreen() {
    const startButton = document.querySelector('.start-button')
    const logo = document.querySelector('.logo')
  startButton.addEventListener('click', ()=>{
        console.log('dupa blada')
       const promise1 = new Promise((resolve , reject) =>{ logo.style.transform = "translateX(1200px)"
        logo.style.transition = "linear 0.7s"
        startButton.style.transform = "translateX(-1200px)"
        startButton.style.transition = "linear 0.7s"})
        setTimeout(() => {
            logo.remove()
            startButton.remove()   
            circles();
            setTimeout(() => {
                circles2()
            }, 1500);
        }, 1000);

        
    })
}
ClearStartScreen();

function circles() {
    const container = document.querySelector('.container')
    const history = document.createElement('div')
    history.innerHTML = "Who Am I ? "
    history.classList.add("history")
    container.appendChild(history)
}

function circles2() {
    const container = document.querySelector('.container')
    const history2 = document.createElement('div')
    history2.innerHTML = "Im Potatoe# start the ssh-agent in the background "
    history2.classList.add("history2")
    container.appendChild(history2)
}