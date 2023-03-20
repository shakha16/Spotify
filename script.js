// let from = prompt('Откуда')
// let to = prompt('Куда')
// let flightTime = prompt('Время полёта')
// let arrivalTime = prompt('Время прилёта')

// let fromStr = document.querySelector('#from')
// let toStr = document.querySelector('#to')
// let flightStr = document.querySelector('#time')
// let arrivalStr = document.querySelector('#time2')


// fromStr.innerHTML = from
// toStr.innerHTML = to
// flightStr.innerHTML = flightTime
// arrivalStr.innerHTML = arrivalTime



// let chekIn = document.querySelector('#chekIn')
// let timeAfter1 = flightTime.slice(0, 2)
// let timeAfter = timeAfter1 - 3

// document.onkeydown = (evt) => {
//     evt = evt || window.event;
//     if (evt.keyCode == 13) {
//         if (timeAfter1 == '02') {
//             chekIn.innerHTML = `23${time.innerHTML.slice(2, 5)}`
//         } else if (timeAfter1 == '01') {
//             chekIn.innerHTML = `22${time.innerHTML.slice(2, 5)}`
//         } else if (timeAfter1 == '00') {
//             chekIn.innerHTML = `21${time.innerHTML.slice(2, 5)}`
//         } else {
//             chekIn.innerHTML = `${timeAfter}${time.innerHTML.slice(2, 5)}`
//         }
//     }
// }


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

                        if(nameC === 'Uzbekistan Air') {
                            logo.src = 'https://www.uzairways.com/sites/default/files/inline-images/lg14.png'
                            llo.className = 'llo'
                            logo.className = 'logotype'
                            logo.style.borderRadius = '15px'
                        } else if (nameC === 'Flymania') {
                            logo.src = './img/logo.png'
                            llo.className = 'llo'
                            logo.className = 'logotype'
                            logo.style.borderRadius = '15px'
                        } else if (nameC === 'Turkish airlines') {
                            logo.src = 'https://companieslogo.com/img/orig/THYAO.IS-f22d40e8.png?t=1602914708'
                            llo.className = 'llo'
                            logo.className = 'logotype'
                            logo.style.borderRadius = '15px'
                        } else if (nameC === 'Wizz Air') {
                            logo.src = './img/image_2023-03-20_12-15-52.png'
                            llo.className = 'llo2'
                            logo.className = 'logotype2'
                            logo.style.borderRadius = '15px'
                        } else if (nameC === 'Qanot Sharq') {
                            logo.src = 'https://img.hhcdn.ru/employer-logo/5610257.jpeg'
                            llo.className = 'llo'
                            logo.className = 'logotype'
                            logo.style.borderRadius = '15px'
                        } else if (nameC === 'Аэрофлот') {
                            logo.src = './img/image_2023-03-20_14-38-00.png'
                            llo.className = 'llo'
                            logo.className = 'logotype'
                            logo.style.borderRadius = '15px'
                            logo.style.borderRadius = '50%'
                        } else if (nameC === 'Ямал') {
                            logo.src = 'https://seekvectorlogo.com/wp-content/uploads/2022/01/yamal-airlines-vector-logo-2022.png'
                            llo.className = 'llo2'
                            logo.className = 'logotype2'
                            logo.style.borderRadius = '15px'
                        } else if (nameC === 'Korean Air') {
                            logo.src = '	https://assets.stickpng.com/images/587b511044060909aa603a80.png'
                            llo.className = 'llo'
                            logo.className = 'logotype'
                            logo.style.borderRadius = '15px'
                        } else if (nameC === 'Fly Dubai') {
                            logo.src = './img/flydubai-transformed.png'
                            llo.className = 'llo'
                            logo.className = 'logotype'
                            logo.style.borderRadius = '15px'
                        } else if (nameC === '') {
                            logo.src = ''
                            llo.className = 'llo'
                            logo.className = 'logotype'
                            logo.style.borderRadius = '15px'
                        } else if (nameC === '') {
                            logo.src = ''
                            llo.className = 'llo'
                            logo.className = 'logotype'
                            logo.style.borderRadius = '15px'
                        } else if (nameC === '') {
                            logo.src = ''
                            llo.className = 'llo'
                            logo.className = 'logotype'
                            logo.style.borderRadius = '15px'
                        } else if (nameC === '') {
                            logo.src = ''
                            llo.className = 'llo'
                            logo.className = 'logotype'
                            logo.style.borderRadius = '15px'
                        } else if (nameC === '') {
                            logo.src = ''
                            llo.className = 'llo'
                            logo.className = 'logotype'
                            logo.style.borderRadius = '15px'
                        } else if (nameC === '') {
                            logo.src = ''
                            llo.className = 'llo'
                            logo.className = 'logotype'
                            logo.style.borderRadius = '15px'
                        } else if (nameC === '') {
                            logo.src = ''
                            llo.className = 'llo'
                            logo.className = 'logotype'
                            logo.style.borderRadius = '15px'
                        } else if (nameC === '') {
                            logo.src = ''
                            llo.className = 'llo'
                            logo.className = 'logotype'
                            logo.style.borderRadius = '15px'
                        } else if (nameC === '') {
                            logo.src = ''
                            llo.className = 'llo'
                            logo.className = 'logotype'
                            logo.style.borderRadius = '15px'
                        } else if (nameC === '') {
                            logo.src = ''
                            llo.className = 'llo'
                            logo.className = 'logotype'
                            logo.style.borderRadius = '15px'
                        } else if (nameC === '') {
                            logo.src = ''
                            llo.className = 'llo'
                            logo.className = 'logotype'
                            logo.style.borderRadius = '15px'
                        }
                    }
                )
        }
    )