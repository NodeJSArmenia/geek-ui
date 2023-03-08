const geeksConteiner = document.getElementById("geeks-conteiner")
const tgGroupsConteiner = document.getElementById("telegram-groups-conteiner")

function startHandling() {
  handleGeeksData(window.geeks); 
  handleTelegramGroups(window.telegramGroups);
}

function handleGeeksData(geeks) {
  geeksConteiner.innerHTML = ""
  geeks.forEach((geek) => {
    const item = document.createElement("div")
    item.classList.add("item")
    geeksConteiner.appendChild(item)
    item.setAttribute("id", geek.name)

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

    const tags = document.createElement("p")
    tags.classList.add("tags")
    geek.hashtags.forEach((hashtag) => {
      tags.innerHTML += ` <span class="green-hashtag">#</span>${hashtag}`
    })
    item.appendChild(tags)

    const icons = document.createElement("div")
    icons.classList.add("icons")
    item.appendChild(icons)

    if (geek.websites.youtube) {
      const a = document.createElement("a")
      icons.appendChild(a)
      a.setAttribute("href", geek.websites.youtube)
      a.setAttribute("target", "_blank")

      a.innerHTML = `<div class="icon-item">
      <svg class="icon-svg" xmlns="http://www.w3.org/2000/svg"  width="16" height="12" viewBox="0 0 16 12">
          <path class="icon-svg-path" fill-rule="nonzero"
                d="M15.666 1.727A2.005 2.005 0 0 0 14.273.334C13.026 0 8.007 0 8.007 0S3.001-.007 1.741.334A2.005 2.005 0 0 0 .348 1.727 20.851 20.851 0 0 0 0 5.598a20.851 20.851 0 0 0 .348 3.857 2.005 2.005 0 0 0 1.393 1.392c1.246.335 6.266.335 6.266.335s5.006 0 6.266-.335a2.005 2.005 0 0 0 1.393-1.392c.23-1.273.342-2.564.333-3.857a20.839 20.839 0 0 0-.333-3.871zm-9.26 6.266V3.196l4.177 2.402-4.178 2.395z"/>
      </svg>
      </div>`
    }

    if (geek.websites.twitter) {
      const a = document.createElement("a")
      icons.appendChild(a)
      a.setAttribute("href", geek.websites.twitter)
      a.setAttribute("target", "_blank")

      a.innerHTML = `<div class="icon-item">
      <svg  class="icon-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13">
          <path class="icon-svg-path" fill-rule="nonzero"
                d="M15.969 1.549c-.59.259-1.22.436-1.884.516A3.305 3.305 0 0 0 15.527.25c-.634.37-1.336.64-2.084.79a3.28 3.28 0 0 0-5.59 2.988A9.29 9.29 0 0 1 1.094.61 3.214 3.214 0 0 0 .65 2.26c0 1.14.58 2.142 1.459 2.73a3.27 3.27 0 0 1-1.485-.41v.04a3.282 3.282 0 0 0 2.63 3.218 3.33 3.33 0 0 1-1.474.057 3.291 3.291 0 0 0 3.069 2.278A6.578 6.578 0 0 1 .78 11.576c-.26 0-.52-.015-.78-.044a9.33 9.33 0 0 0 5.038 1.472c6.036 0 9.332-4.997 9.332-9.323 0-.14 0-.28-.01-.42.64-.46 1.2-1.04 1.64-1.7l-.031-.012z"/>
      </svg>
      </div>`
    }

    if (geek.websites.facebook) {
      const a = document.createElement("a")
      icons.appendChild(a)
      a.setAttribute("href", geek.websites.facebook)
      a.setAttribute("target", "_blank")

      a.innerHTML = `<div class="icon-item">               
      <svg class="icon-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
          <path class="icon-svg-path" fill-rule="nonzero"
              d="M16 8a8 8 0 1 0-9.25 7.903v-5.59H4.719V8H6.75V6.238c0-2.005 1.194-3.113 3.022-3.113.875 0 1.79.156 1.79.156V5.25h-1.008c-.994 0-1.304.617-1.304 1.25V8h2.219l-.355 2.313H9.25v5.59A8.002 8.002 0 0 0 16 8z"/>
      </svg>
      </div>`
    }

    if (geek.websites.medium) {
      const a = document.createElement("a")
      icons.appendChild(a)
      a.setAttribute("href", geek.websites.medium)
      a.setAttribute("target", "_blank")

      a.innerHTML = `<div class="icon-item">                   
      <svg class="medium-icon icon-svg" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
          <path  class="icon-svg-path" d="M19 24h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5v14c0 2.761-2.237 4.999-5 5zm.97-5.649v-.269l-1.247-1.224c-.11-.084-.165-.222-.142-.359v-8.998c-.023-.137.032-.275.142-.359l1.277-1.224v-.269h-4.422l-3.152 7.863-3.586-7.863h-4.638v.269l1.494 1.799c.146.133.221.327.201.523v7.072c.044.255-.037.516-.216.702l-1.681 2.038v.269h4.766v-.269l-1.681-2.038c-.181-.186-.266-.445-.232-.702v-6.116l4.183 9.125h.486l3.593-9.125v7.273c0 .194 0 .232-.127.359l-1.292 1.254v.269h6.274z"/>
      </svg>
      </div>`
    }

    if (geek.websites.telegram) {
      const a = document.createElement("a")
      icons.appendChild(a)
      a.setAttribute("href", geek.websites.telegram)
      a.setAttribute("target", "_blank")

      a.innerHTML = `<div class="icon-item">  
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14">
            <path class="icon-svg-path" fill-rule="nonzero"
                  d="M15.369.003V.001c.558.045.722.577.587 1.2l-2.494 11.55c-.162.751-.726.844-1.406.348l-3.523-2.57-1.935 1.868c-.304.293-.868.378-1.036-.135L4.11 7.809.677 6.726C-.647 6.308.301 5.715.75 5.541L14.675.134c.277-.107.507-.146.694-.13zm-2.471 2.402a.795.795 0 0 0-.267.106l-7.856 4.98c-.047.028-.1.024-.05.175l1.27 3.9.259-2.65c.005-.052.007-.085.065-.136l6.633-5.954c.366-.33.2-.466-.054-.42z"/>
        </svg>
      </div>
      `
    }

    if (geek.websites.website) {
      const a = document.createElement("a")
      icons.appendChild(a)
      a.setAttribute("href", geek.websites.website)
      a.setAttribute("target", "_blank")

      a.innerHTML = `<div class="icon-item">  
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path class="icon-svg-path" fill-rule="nonzero" d="M10.975 14.51a1.05 1.05 0 0 0 0-1.485 2.95 2.95 0 0 1 0-4.172l3.536-3.535a2.95 2.95 0 1 1 4.172 4.172l-1.093 1.092a1.05 1.05 0 0 0 1.485 1.485l1.093-1.092a5.05 5.05 0 0 0-7.142-7.142L9.49 7.368a5.05 5.05 0 0 0 0 7.142c.41.41 1.075.41 1.485 0zm2.05-5.02a1.05 1.05 0 0 0 0 1.485 2.95 2.95 0 0 1 0 4.172l-3.5 3.5a2.95 2.95 0 1 1-4.171-4.172l1.025-1.025a1.05 1.05 0 0 0-1.485-1.485L3.87 12.99a5.05 5.05 0 0 0 7.142 7.142l3.5-3.5a5.05 5.05 0 0 0 0-7.142 1.05 1.05 0 0 0-1.485 0z"/>
            </svg>
      </div>
      `
    }
  })
}

function handleTelegramGroups(groups) {
  tgGroupsConteiner.innerHTML = ""
  groups.forEach((group) => {
    const a = document.createElement("a")
    tgGroupsConteiner.appendChild(a)
    a.setAttribute("target", "_blank")
    a.setAttribute("href", group.link)

    const tgGroup = document.createElement("div")
    tgGroup.classList.add("telegram-group")
    a.appendChild(tgGroup)

    const tgLogo = document.createElement("img")
    tgLogo.classList.add("tg-logo")
    tgLogo.setAttribute("src", group.avatar)
    tgGroup.appendChild(tgLogo)

    const tgName = document.createElement("p")
    tgName.classList.add("tg-name")
    tgGroup.appendChild(tgName)
    tgName.innerHTML = group.name
  })
}

geeksConteiner.innerHTML = `
<div class="item"><div class="profile-img loading-color" style="--b:#000000"></div></div>
<div class="item"><div class="profile-img loading-color" style="--b:#000000"></div></div>
<div class="item"><div class="profile-img loading-color" style="--b:#000000"></div></div>
<div class="item"><div class="profile-img loading-color" style="--b:#000000"></div></div>
<div class="item"><div class="profile-img loading-color" style="--b:#000000"></div></div>
`
tgGroupsConteiner.innerHTML = `
<a><div class="telegram-group"><div class="loading-rect" style="width:100px; height:100px;"></div></div></a>
<a><div class="telegram-group"><div class="loading-rect" style="width:100px; height:100px;"></div></div></a>
<a><div class="telegram-group"><div class="loading-rect" style="width:100px; height:100px;"></div></div></a>
<a><div class="telegram-group"><div class="loading-rect" style="width:100px; height:100px;"></div></div></a>
<a><div class="telegram-group"><div class="loading-rect" style="width:100px; height:100px;"></div></div></a>
<a><div class="telegram-group"><div class="loading-rect" style="width:100px; height:100px;"></div></div></a>
<a><div class="telegram-group"><div class="loading-rect" style="width:100px; height:100px;"></div></div></a>
`

startHandling();