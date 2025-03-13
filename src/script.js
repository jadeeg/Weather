function signUp(event) {
  event.preventDefault();
  let input = document.querySelector(".city");
  console.log(input.value);
}
let form = document.querySelector("form");
form.addEventListener("submit", signUp);
 

let temperature = document.query