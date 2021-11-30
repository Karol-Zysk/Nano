const startButton = document.querySelector('.start-button')
const logo = document.querySelector('.logo')


  startButton.addEventListener('click', function ClearStartScreen() {


        console.log('dupa blada')
        logo.style.transform = "translateX(1200px)"
        logo.style.transition = "linear 0.7s"
        setTimeout(() => {
            startButton.style.transform = "translateX(-1200px)"
            startButton.style.transition = "linear 0.7s"
        }, 500);

        setTimeout(() => {
            
            logo.remove()
            startButton.remove()   
            circles();
            setTimeout(() => {
                circles2()
                createGameDiv()
            }, 2000);
        }, 1000);

    })
    
    


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
    history2.innerHTML = "Im NANO. Im soo small that i almost dont even exist.<br> Let me show You"
    history2.classList.add("history2")
    container.appendChild(history2)
}

const createSnow = () => {
	const snowflake = document.createElement('i')
    const container = document.querySelector('.container')
	snowflake.classList.add('snowflake')
	snowflake.textContent = '.'

	snowflake.style.left = Math.random() * window.innerWidth + 'px'
	snowflake.style.top = Math.random() * 1000 + 'px'
	snowflake.style.animationDuration = Math.random() * 2 + 10+ 's'
	snowflake.style.opacity = Math.random()
	

	container.append(snowflake)

	setTimeout(() => {
		snowflake.remove()
	}, 12000)
}

setInterval(createSnow, 200)


function createGameDiv (){
    const container = document.querySelector('.container')
   const GameDiv = document.createElement('div')
   GameDiv.classList.add('game-div')
   container.appendChild(GameDiv)
   console.log('create gameDiv')
   function showAtom() {
    const atomGif = document.createElement('div')
    const scaleBar = document.createElement('div')
    GameDiv.appendChild(atomGif)
   GameDiv.appendChild(scaleBar)
   scaleBar.classList.add('scale-bar')
   scaleBar.innerHTML = "3.1x10<sup>-11</sup>m"
    atomGif.classList.add('atom-gif')
    setTimeout(() => {
        atomGif.classList.remove('atom-gif')
        atomGif.classList.add('electron-gif')
    }, 12000);
    
}
showAtom()
}

