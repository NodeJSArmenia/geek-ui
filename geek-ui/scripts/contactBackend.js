fetch("https://geek-api.onrender.com/geeks")
  .then((res) => {
    return res.json()
  })
  .then((resp) => {
    console.log(resp)
  })

function handleGeeksData(data) {
  console.log(data)
}
