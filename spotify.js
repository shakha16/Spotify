/////work\\\\\
let udd = document.querySelector('.udd')
let settings = document.querySelector('.settings')
let playlist = document.querySelector('.playlist')
let one = document.querySelector('.one')
let active = document.querySelector('.active')
let text1 = document.querySelector('.text1')
let text2 = document.querySelector('.text2')
let text3 = document.querySelector('.text3')


active.onclick = () => {
    one.style.height = "70%"
    udd.style.display = "flex"
    settings.style.display = "none"
    playlist.style.display = "none"
    active.className = "active"
    text3.className = "text3"
    text2.className = "text2"
}

text2.onclick = () => {
    one.style.height = "100vh"
    udd.style.display = "none"
    settings.style.display = "none"
    playlist.style.display = "block"
    active.className = "text2"
    text2.className = "active"
    text3.className = "text3"
}

text3.onclick = () => {
    one.style.height = "100vh"
    udd.style.display = "none"
    playlist.style.display = "none"
    settings.style.display = "block"
    active.className = "text2"
    text3.className = "active"
    text2.className = "text2"
}




let input = document.querySelector('#inp')
let span = document.querySelector('.name1')

localStorage.setItem('val', input.value)




let ii = document.querySelectorAll('.ii')
let like = document.querySelectorAll('.like')



like.forEach(like =>{
    like.onclick = ()  => {
        like.innerHTML = "💚"
    }
})


ii.forEach(ii => {
    ii.onmouseenter = () => {
        ii.classList.add('activeSong')
    }
    ii.onmouseleave = () => {
        ii.classList.remove('activeSong')
    }
})






let music1 = document.querySelector('.music1')
let music2 = document.querySelector('.music2')
let music3 = document.querySelector('.music3')
let music4 = document.querySelector('.music4')
let music5 = document.querySelector('.music5')
let music6 = document.querySelector('.music6')
let music7 = document.querySelector('.music7')
let music8 = document.querySelector('.music8')
let music9 = document.querySelector('.music9')
let music10 = document.querySelector('.music10')


let xcho = document.querySelector('#xcho')
let maskOff = document.querySelector('#maskOff')
let musiсForSoul = document.querySelector('#musiсForSoul')
let loveMe = document.querySelector('#loveMe')
let fireMan = document.querySelector('#fireMan')
let lov = document.querySelector('#lov')
let karma = document.querySelector('#karma')
let pullin = document.querySelector('#pullin')
let im = document.querySelector('#im')
let fortnite = document.querySelector('#fortnite')


let nameMusic = document.querySelector('#nameMusic')
let nameMusic2 = document.querySelector('#nameMusic2')
let audio = document.querySelector('.audio')

music1.onclick = () => {
    lov.pause()
    karma.pause()
    pullin.pause()
    im.pause()
    fortnite.pause()
    loveMe.pause()
    maskOff.pause()
    fireMan.pause()
    xcho.play()
    nameMusic.innerHTML = "Xcho"
    nameMusic2.innerHTML = "I can fly"
}
music2.onclick = () => {
    lov.pause()
    karma.pause()
    pullin.pause()
    im.pause()
    fortnite.pause()
    loveMe.pause()
    maskOff.play()
    fireMan.pause()
    xcho.pause()
    nameMusic.innerHTML = "Xcho"
    nameMusic2.innerHTML = "I can fly"
}
music3.onclick = () => {
    karma.pause()
    pullin.pause()
    im.pause()
    fortnite.pause()
    loveMe.pause()
    maskOff.pause()
    fireMan.pause()
    xcho.pause()
    musiсForSoul.play()
    nameMusic.innerHTML = "Xcho"
    nameMusic2.innerHTML = "I can fly"
}
music4.onclick = () => {
    lov.pause()
    karma.pause()
    pullin.pause()
    im.pause()
    fortnite.pause()
    loveMe.play()
    maskOff.pause()
    fireMan.pause()
    xcho.pause()
    nameMusic.innerHTML = "Xcho"
    nameMusic2.innerHTML = "I can fly"
}
music5.onclick = () => {
    lov.pause()
    karma.pause()
    pullin.pause()
    im.pause()
    fortnite.pause()
    loveMe.pause()
    maskOff.pause()
    xcho.pause()
    fireMan.play()
    nameMusic.innerHTML = "Xcho"
    nameMusic2.innerHTML = "I can fly"
}
music6.onclick = () => {
    lov.play()
    karma.pause()
    pullin.pause()
    im.pause()
    fortnite.pause()
    loveMe.pause()
    maskOff.pause()
    fireMan.pause()
    xcho.pause()
    nameMusic.innerHTML = "Xcho"
    nameMusic2.innerHTML = "I can fly"
}
music7.onclick = () => {
    karma.play()
    lov.pause()
    pullin.pause()
    im.pause()
    fortnite.pause()
    loveMe.pause()
    maskOff.pause()
    fireMan.pause()
    xcho.pause()
    nameMusic.innerHTML = "Xcho"
    nameMusic2.innerHTML = "I can fly"
}
music8.onclick = () => {
    lov.pause()
    karma.pause()
    pullin.play()
    im.pause()
    fortnite.pause()
    loveMe.pause()
    maskOff.pause()
    fireMan.pause()
    xcho.pause()
    nameMusic.innerHTML = "Xcho"
    nameMusic2.innerHTML = "I can fly"
}
music9.onclick = () => {
    lov.pause()
    karma.pause()
    pullin.pause()
    im.play()
    fortnite.pause()
    loveMe.pause()
    maskOff.pause()
    fireMan.pause()
    xcho.pause()
    nameMusic.innerHTML = "Xcho"
    nameMusic2.innerHTML = "I can fly"
}
music10.onclick = () => {
    lov.pause()
    karma.pause()
    pullin.pause()
    im.pause()
    fortnite.play()
    loveMe.pause()
    maskOff.pause()
    fireMan.pause()
    xcho.pause()
    nameMusic.innerHTML = "Xcho"
    nameMusic2.innerHTML = "I can fly"
}

let daun = document.querySelector('.bo')
let p = document.querySelector('#p')
let saveSettings = document.querySelector('.save-settings')
let first = document.querySelector('.first')
let mscc = document.querySelector('#name-music')
let inpp = document.querySelector('.inpp')
let inp = document.querySelector('#inp')
let on = document.querySelector('checkbox')


daun.onclick = () => {
    p.classList.toggle('b')
}
saveSettings.onclick = () => {
    span.innerHTML = localStorage.getItem('val')
    if (p.className === 'b') {
        one.style.background = "var(--background-color-orange)"
        first.style.background = "var(--background-color-or)"
        active.style.color = "var(--org-color)"
        
        one.style.height = "70%"
        udd.style.display = "flex"
        settings.style.display = "none"
        playlist.style.display = "none"
        active.className = "active"
        text3.className = "text3"
        text2.className = "text2"

        mscc.style.color = "var(--org-color)"
        inpp.style.backgroundColor = "#734640"
        inp.style.backgroundColor = "#734640"
        saveSettings.style.backgroundColor = "var(--org-color)"
        
        active.onclick = () => {
            one.style.height = "70%"
            udd.style.display = "flex"
            settings.style.display = "none"
            playlist.style.display = "none"
            active.className = "active"
            active.style.color = "#EB735C"
            text3.className = "text3"
            text3.style.color = "white"
            text2.className = "text2"
            text2.style.color = "white"
        }
        
        text2.onclick = () => {
            one.style.height = "100vh"
            udd.style.display = "none"
            settings.style.display = "none"
            playlist.style.display = "block"
            active.className = "text2"
            active.style.color = "white"
            text2.className = "active"
            text2.style.color = "#EB735C"
            text3.className = "text3"
            text3.style.color = "white"
        }
        
        text3.onclick = () => {
            one.style.height = "100vh"
            udd.style.display = "none"
            settings.style.display = "none"
            settings.style.display = "block"
            playlist.style.display = "none"
            active.className = "text2"
            active.style.color = "white"
            text2.className = "text2"
            text2.style.color = "white"
            text3.className = "active"
            text3.style.color = "#EB735C"
        }
        
        like.forEach(like =>{
            like.onclick = ()  => {
                like.innerHTML = "🧡"
            }
        })
        
        
        ii.forEach(ii => {
            ii.onmouseenter = () => {
                ii.classList.add('activeSong1')
            }
            ii.onmouseleave = () => {
                ii.classList.remove('activeSong1')
            }
        })


    } else {
        one.style.background = "var(--background-color-green)"
        first.style.background = "var(--background-color-green2)"
        active.style.color = "#00EBBD"  
        
        one.style.height = "70%"
        udd.style.display = "flex"
        settings.style.display = "none"
        playlist.style.display = "none"
        active.className = "active"
        text3.className = "text3"
        text3.style.color = "white"
        text2.className = "text2"

        mscc.style.color = "#00EBBD"
        inpp.style.backgroundColor = "#265249"
        inp.style.backgroundColor = "#265249"
        saveSettings.style.backgroundColor = "#00EBBD"
        
        active.onclick = () => {
            one.style.height = "70%"
            udd.style.display = "flex"
            settings.style.display = "none"
            playlist.style.display = "none"
            active.className = "active"
            active.style.color = "#00EBBD"
            text3.className = "text3"
            text3.style.color = "white"
            text2.className = "text2"
            text2.style.color = "white"
        }
        
        text2.onclick = () => {
            one.style.height = "100vh"
            udd.style.display = "none"
            settings.style.display = "none"
            playlist.style.display = "block"
            active.className = "text2"
            active.style.color = "white"
            text2.className = "active"
            text2.style.color = "#00EBBD"
            text3.className = "text3"
            text3.style.color = "white"
        }
        
        text3.onclick = () => {
            one.style.height = "100vh"
            udd.style.display = "none"
            settings.style.display = "none"
            settings.style.display = "block"
            active.className = "text2"
            active.style.color = "white"
            text3.className = "active"
            text3.style.color = "#00EBBD"
            text2.className = "text2"
            text2.style.color = "white"
        }

        like.forEach(like =>{
            like.onclick = ()  => {
                like.innerHTML = "💚"
            }
        })
        
        
        ii.forEach(ii => {
            ii.onmouseenter = () => {
                ii.classList.add('activeSong')
            }
            ii.onmouseleave = () => {
                ii.classList.remove('activeSong')
            }
        })

    }
}



let options = document.querySelectorAll('.options')
let option = document.querySelector('.option')
let option1 = document.querySelectorAll('.option1')
let k = document.querySelector('.k')


options.forEach(options => {
    options.onclick = () =>{
        option1.forEach(option1 => {
            option1.classList.add('option')
        })
    }
}) 
k.onclick = () =>{
    if(p.className === 'b'){
        like.forEach(like =>{
            like.innerHTML = "🧡"
        })
    } else{
        like.forEach(like =>{
            like.innerHTML = "💚"
        })
    }
    option1.forEach(option1 => {
        option1.classList.remove('option')
    })
}




let arrOfSongs = [
    {
        id: 1,
        name: 'I can fly',
        artist: 'Xcho',
        time: '2:13',
    },
    {
        id: 2,
        name: 'Mask off',
        artist: 'Nedir',
        time: '3:56'
    },
    {
        id: 3,
        name: 'Музыка для души',
        artist: 'Unknown',
        time: '1:45'
    },
    {
        id: 4,
        name: 'Люби меня',
        artist: 'Mitagi',
        time: '2:50'
    },
    {
        id: 5,
        name: 'Fire Man',
        artist: 'Miyagi',
        time: '7:38'
    },
    {
        id: 6,
        name: 'Вкус твоей любви',
        artist: 'Unknown',
        time: '1:54'
    },
    {
        id: 7,
        name: 'Bad karma - Slowed',
        artist: 'Unknown',
        time: '0:54'
    },
    {
        id: 8,
        name: 'Pullin up',
        artist: 'Verdas',
        time: '3:10'
    },
    {
        id: 9,
        name: 'Я закохався',
        artist: 'Реп',
        time: '4:35'
    },
    {
        id: 10,
        name: 'Я захожу в фортнайт',
        artist: 'Мальчик',
        time: '2:13'
    }
]

let musics = document.querySelectorAll('.musics')
function song(arrOfSongs) {
    musics.forEach(musics =>{
        musics.innerHTML = ""
        for(let item of arrOfSongs){
            musics.innerHTML = `
                <div class="music1 ii" onclick="document.getElementById('fortnite').play()">
                    <div class="song">
                        <div class="pleer2">
                            <div class="num">${item.id}</div>
                            <div class="photo">
                                <img src="./img/photo_2022-02-27_09-54-33.jpg" alt="">
                            </div>
                            <div class="description">
                                <span id="one">${item.name}</span><br>
                                <p id="two">${item.artist}</p>
                            </div>
                        </div>
                        <div class="pleer2">
                            <div class="like">
                                <span>🤍</span>
                            </div>
                            <div class="time">${item.time}</div>
                            <div class="options">
                                <span>...</span>
                            </div>
                        </div>
                    </div>
                </div>    
            `
        }
    })
}
song(arrOfSongs)