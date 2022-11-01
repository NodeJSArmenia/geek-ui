const conteiner = document.getElementsByClassName("conteiner")[0]

fetch("https://geek-api.onrender.com/geeks")
  .then((res) => {
    return res.json()
  })
  .then(handleGeeksData)

function handleGeeksData(geeks) {
  console.log(geeks)

  geeks.forEach((geek) => {
    const item = document.createElement("div")
    item.classList.add("item")
    conteiner.appendChild(item)

    const profileImg = document.createElement("div")
    profileImg.classList.add("profile-img")
    profileImg.setAttribute("style", `--b:url(${geek.avatar}) center/cover;`)
    item.appendChild(profileImg)

    const name = document.createElement("h1")
    name.classList.add("name")
    name.innerHTML = `${geek.name.split(" ")[0]} <br/> ${
      geek.name.split(" ")[1]
    }`
    item.appendChild(name)
  })
}

/*
<div class="item">
                <div class="profile-img"></div>
                <h1 class="name">Nairi Harutunyan</h1>
                <p class="tags"><span class="green-hashtag">#</span>JavaScript <span class="green-hashtag">#</span>Node.js <span class="green-hashtag">#</span>Podcasts</p>
                <div class="icons" onselectstart="return false"> 
                    <a href="#">
                        <div class="icon-item youtube-icon"></div>
                    </a>
                    <a href="#">
                        <div class="icon-item twitter-icon" style="--b:url(../assets/icons/twitter.png) center/cover;"></div>
                    </a>
                    <a href="#">
                        <div class="icon-item fb-icon" style="--b:url(../assets/icons/fb.png) center/cover;"></div>
                    </a>
                    <a href="#">
                        <div class="icon-item medium-icon" style="--b:url(../assets/icons/medium.png) center/cover;"></div>
                    </a>
                </div>
            </div>

*/
