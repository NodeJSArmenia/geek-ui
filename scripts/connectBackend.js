const conteiner = document.getElementsByClassName("conteiner")[0]

fetch("https://geek-api.onrender.com/geeks")
  .then((res) => {
    return res.json()
  })
  .then(handleGeeksData)

function handleGeeksData(data) {
  console.log(data)

  const item = document.createElement("div")
  item.classList.add("item")
  conteiner.appendChild(item)

  const name = document.createElement("h1")
  name.classList.add("name")
  item.appendChild(name)
}

/*
<div class="item">
                <div class="profile-img" style="--b:url(https://avatars.githubusercontent.com/u/15065065?v=4) center/cover;"></div>
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
