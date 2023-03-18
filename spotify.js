let from = prompt('Откуда')
let to = prompt('Куда')
let flightTime = prompt('Время полёта')
let arrivalTime = prompt('Время прилёта')

let fromStr = document.querySelector('#from')
let toStr = document.querySelector('#to')
let flightStr = document.querySelector('#time')
let arrivalStr = document.querySelector('#time2')


fromStr.innerHTML = from
toStr.innerHTML = to
flightStr.innerHTML = flightTime
arrivalStr.innerHTML = arrivalTime



let chekIn = document.querySelector('#chekIn')
let timeAfter1 = flightTime.slice(0,2)
let timeAfter = timeAfter1 - 3

document.onkeydown = (evt) => {
    evt = evt || window.event;
    if (evt.keyCode == 13) {
        // if(timeAfter1 =)
        chekIn.innerHTML = `${timeAfter}${time.innerHTML.slice(2,5)}`
    }
}