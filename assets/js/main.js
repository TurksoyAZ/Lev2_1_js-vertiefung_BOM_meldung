//
let message = document.querySelector('.message')
let count = document.querySelector('#count')
//

let num = 10

let los = () => {

    let forSetinterval = setInterval(() => {

        num--
        count.innerHTML = num

        if (num === 0) {
            clearInterval(forSetinterval)
            message.style.opacity = '0'
            message.style.transition = '0.4s ease'
        }

    }, 1000)

}

window.onload = los()