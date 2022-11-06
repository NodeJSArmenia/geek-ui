const searchInput = document.getElementsByClassName("search-input")[0]
const typingWords = ["Data Structures", "JavaScript", "DevOps"]

let word = 0,
  letter = 0,
  diff = 1

setInterval(() => {
  word = word % typingWords.length
  searchInput.placeholder = typingWords[word].slice(0, letter) + "|"

  letter += diff

  if (letter >= typingWords[word].length) {
    diff = -1
  } else if (letter <= 0) {
    diff = 1
    letter = 0
    word++
  }
}, 1000 / 6)

/*
    <!-- <div class="search-bar">
        <span class="hashtag">#</span>
        <input type="text" class="search-input" placeholder="Search...">
    </div> -->
*/
