const api = 'http://localhost:3000/api/v1/notes'

fetch(api)
.then(resp => resp.json())
.then(json => console.log(json));

console.log("hello");
  // .then(function(myJson) {
  //   console.log(myJson);
  // });
