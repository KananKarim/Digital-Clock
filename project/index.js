let hours = document.querySelector('#hours')
let minutes = document.querySelector('#minutes')
let seconds = document.querySelector('#seconds')
let ampm = document.querySelector('#ampm')

function setClock() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm1 = "AM"
   

    if(h>12){
        h = h-12
        ampm1 = "PM"
    }

    h = h < 10?"0"+h:h
    m = m < 10?"0"+m:m
    s = s < 10?"0"+s:s

    hours.innerText = h
    minutes.innerText = m
    seconds.innerText = s
    ampm.innerText = ampm1

    setTimeout(() => {
        setClock()
    }, 1000);


    
}

setClock()