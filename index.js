document.addEventListener("DOMContentLoaded", () => {

const outerDiv = document.getElementById('outer-div')
outerDiv.addEventListener('click', (event) => {
  event.preventDefault()

  const api = 'http://localhost:3000/api/v1/notes'

  function index(){
    return fetch(api)
    .then(resp => resp.json())
  }

  function renderPage() {
  index().then(data => renderNotes(data))
  index().then(data => renderTitles(data))
  }

  function renderNotes(array){
    let notesHTML = array.map( noteObj =>
     `<div><h3>${noteObj.title}</h3><p>${noteObj.body}</p></div>`).join("")
    // console.log(notesHTML)
    firstDiv.innerHTML = notesHTML
  }

  // function formCreator(){
  //   let newForm = `<form>
  //   Title:<br>
  //   <input type="text" name="title" placeholder="title here" id="title-input"><br>
  //   Content:<br>
  //   <input type="text" name="body" placeholder="content here"
  //   id="content-input">
  //   </form>
  //   <input id="submit" type="submit">`
  //   newButton.innerHTML = newForm
  //   leftDiv.appendChild(newButton)
  // }

  function submitNote(){
  let title = titleValue
  let body = contentValue
  addNote(title, body)
  }

  function renderTitles(array){
    let titlesHTML = array.map( noteObj =>
     `<div><h3>${noteObj.title}</h3></div>`).join("")
    leftDiv.innerHTML = titlesHTML
    // formCreator()
  }
  // debugger

  function addNote(title, body){
    const postMethod = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title,
        body: body,
        user_id: 1,
      })
    }
    fetch(api, postMethod).then(resp => resp.json()).then( data => console.log("hi"))
  }

  const firstDiv = document.getElementById('first')
  const leftDiv = document.getElementById('left')
  const newButton = document.getElementById('new')
  const submitButton = document.getElementById('submit')
  let titleInput = document.getElementById("title-input")
  let titleValue = titleInput.value
  let contentInput = document.getElementById("content-input")
  let contentValue = contentInput.value



  if (event.target.id === "submit"){
    submitNote()

  }




// index().then(data => cleanedBody(data))
//
// function cleanedBody(array){
// let body = array.forEach( noteObj => {
//   return noteObj.body.replace(/\n|\r/g, "")
//   console.log(noteObj.body)
// })
//
// }


// function renderNotes(array){
//   let notesHTML = array.map( noteObj =>
//    `<div><h3>${noteObj.title}</h3><p>${noteObj.body}</p></div>`).join("")
//   // console.log(notesHTML)
//   firstDiv.innerHTML = notesHTML
// }
//
// function renderTitles(array){
//   let titlesHTML = array.map( noteObj =>
//    `<div><h3>${noteObj.title}</h3></div>`).join("")
//   leftDiv.innerHTML = titlesHTML
//   // formCreator()
// }




// function submit(){
//   submitButton.v
// }

// function submit(form){
//   return fetch(api, {
//     method: 'post'
//     body: JSON.stringify(form)
//   }).then(function(response)) {
//     return response.json()
//   })
//   }
//
// }


// function targetElement(){
//   if (event.target.class === container){
//     console.log("hello");
//   }
// }

})
})
//{once:true})

// const api = 'http://localhost:3000/api/v1/notes'
//
// function index(){
//   return fetch(api)
//   .then(resp => resp.json())
// }
//
// let leftDiv = document.getElementById('left')
//
// index().then(data => renderTitles(data))
//
// function renderTitles(array){
//   let titlesHTML = array.map(noteObj =>
//   `<h3>${noteObj.title}</h3>`).join("")
//   // titleEventAdder(array)
//   leftDiv.innerHTML = titlesHTML
// }

// function titleEventAdder(array){
//   array.map(noteTitles =>
//   noteObj.title.addEventListener("click", function() {console.log("hi")}))
// }
