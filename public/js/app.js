const weatherform = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

weatherform.addEventListener("submit", (e) => {
  e.preventDefault();
  messageOne.textContent = "Loading 😊 please wait...";
  messageTwo.textContent = "";
  const location = search.value;
  const url = "/weather?address=" + location;
  fetch(url).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error;
      } else {
        messageOne.textContent = data.location;
        messageTwo.textContent = data.forecast;
      }
    });
  });
});
