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
let timeAfter1 = flightTime.slice(0, 2)
let timeAfter = timeAfter1 - 3

document.onkeydown = (evt) => {
    evt = evt || window.event;
    if (evt.keyCode == 13) {
        if (timeAfter1 == '02') {
            chekIn.innerHTML = `23${time.innerHTML.slice(2, 5)}`
        } else if (timeAfter1 == '01') {
            chekIn.innerHTML = `22${time.innerHTML.slice(2, 5)}`
        } else if (timeAfter1 == '00') {
            chekIn.innerHTML = `21${time.innerHTML.slice(2, 5)}`
        } else {
            chekIn.innerHTML = `${timeAfter}${time.innerHTML.slice(2, 5)}`
        }
    }
}


let comp = document.querySelector('#company')
let logo = document.querySelector('.logotype')
let llo = document.querySelector('.llo')




document.addEventListener
    (
        "DOMContentLoaded",
        function () {
            comp.addEventListener
                (
                    'change',
                    function () {
                        let nameC = this.options[this.selectedIndex].text
                        console.log(nameC   );

                        if(nameC === 'Havo yollari') {
                            logo.src = 'https://www.uzairways.com/sites/default/files/inline-images/lg14.png'
                            llo.className = 'llo'
                            logo.className = 'logotype'
                        } else if (nameC === 'Flymania') {
                            logo.src = './img/logo.jpg'
                            llo.className = 'llo'
                            logo.className = 'logotype'
                        } else if (nameC === 'Turkish airlines') {
                            logo.src = 'https://companieslogo.com/img/orig/THYAO.IS-f22d40e8.png?t=1602914708'
                            llo.className = 'llo'
                            logo.className = 'logotype'
                        } else if (nameC === 'Wizz Air') {
                            logo.src = './img/image_2023-03-20_12-15-52.png'
                            llo.className = 'llo2'
                            logo.className = 'logotype2'
                        } else if (nameC === '') {
                            logo.src = ''
                        } else if (nameC === '') {
                            logo.src = ''
                        } else if (nameC === '') {
                            logo.src = ''
                        } else if (nameC === '') {
                            logo.src = ''
                        } else if (nameC === '') {
                            logo.src = ''
                        } else if (nameC === '') {
                            logo.src = ''
                        }
                    }
                )
        }
    )