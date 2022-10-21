let arrOfSongs = [
    {
        id: 1,
        name: "Mask off",
        artist: "Unknown",
        time: "2:38",
        img: "",
        audio: "./Musics/07 Mask Off.mp3"
    },
]



/////work\\\\\
let randomSongs = document.querySelector('.musics')
let likedSongs = document.querySelector('.like')
let listenedSongs = document.querySelector('.res')

function musics(arrOfSongs) {
    randomSongs.innerHTML = ""
    for (let item of arr) {
        randomSongs.innerHTML += `
        <div src="" class="song" controls>
            <div class="pleer2">
                <div class="num"></div>
                <div class="photo">
                    <img src="" alt="">
                </div>
                <div class="description">
                    <span></span><br>
                    <span></span>
                </div>
            </div>
            <div class="pleer2">
                <div class="like"></div>
                <div class="time"></div>
                <div class="options"></div>
            </div>
        </div>    
        `
    }
}



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
    settings.style.display = "none"
    settings.style.display = "block"
    active.className = "text2"
    text3.className = "active"
    text2.className = "text2"
}







// let nameD = prompt('Введите имя')

// let inpName = document.querySelector('#inp')
// let spanName = document.querySelector('name')
// let firstName = document.querySelector('firstName')

// spanName.innerHTML = nameD   


let ii = document.querySelectorAll('.ii')
let one1 = document.querySelectorAll('#one')
let two = document.querySelectorAll('#two')
let options = document.querySelectorAll('.options')
let like = document.querySelectorAll('.like')


ii.forEach(ii => {
    ii.onmouseenter = () => {
        one1.forEach(one1 => {
            one1.style.color = "#00EBBD"
        })
        two.forEach(two => {
            two.style.color = "#fff"
        })
        options.forEach(options => {
            options.style.display = "block"
        })
        like.forEach(like => {
            like.style.display = "block"
            like.onclick = () => {
                like.innerHTML = "💚"
            }
        })
    }
    ii.onmouseleave = () => {
        one1.forEach(one1 => {
            one1.style.color = "#fff"
        })
        two.forEach(two => {
            two.style.color = "#73848D"
        })
        options.forEach(options => {
            options.style.display = "none"
        })
        like.forEach(like => {
            like.style.display = "none"
        })

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
    fireMan.play()
    xcho.pause()
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

daun.onclick = () => {
    p.classList.toggle('b')
    console.log(p.className);
}
saveSettings.onclick = () => {
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
            active.className = "text2"
            active.style.color = "white"
            text2.className = "text2"
            text2.style.color = "white"
            text3.className = "active"
            text3.style.color = "#EB735C"
        }

        ii.forEach(ii => {
            ii.onmouseenter = () => {
                one1.forEach(one1 => {
                    one1.style.color = "var(--org-color)"
                })
                two.forEach(two => {
                    two.style.color = "#fff"
                })
                options.forEach(options => {
                    options.style.display = "block"
                })
                like.forEach(like => {
                    like.style.display = "block"
                    like.onclick = () => {
                        like.innerHTML = "🧡"
                    }
                })
            }
            ii.onmouseleave = () => {
                one1.forEach(one1 => {
                    one1.style.color = "#fff"
                })
                two.forEach(two => {
                    two.style.color = "#73848D"
                })
                options.forEach(options => {
                    options.style.display = "none"
                })
                like.forEach(like => {
                    like.style.display = "none"
                })

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

        ii.forEach(ii => {
            ii.onmouseenter = () => {
                one1.forEach(one1 => {
                    one1.style.color = "#00EBBD"
                })
                two.forEach(two => {
                    two.style.color = "#fff"
                })
                options.forEach(options => {
                    options.style.display = "block"
                })
                like.forEach(like => {
                    like.style.display = "block"
                    like.onclick = () => {
                        like.innerHTML = "💚"
                    }
                })
            }
            ii.onmouseleave = () => {
                one1.forEach(one1 => {
                    one1.style.color = "#fff"
                })
                two.forEach(two => {
                    two.style.color = "#73848D"
                })
                options.forEach(options => {
                    options.style.display = "none"
                })
                like.forEach(like => {
                    like.style.display = "none"
                })

            }
        })

    }
}