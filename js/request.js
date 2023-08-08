// api
const API = "https://randomuser.me/api/?results=9";

// for leader
const overlay = document.getElementById("overlay");

// loader toggle
let loaderToggle = (toggle) => {
  if (toggle) {
    overlay.classList.remove("hidden");
  } else {
    overlay.classList.add("hidden");
  }
};

const getTodos = (resurse) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      //   console.log(request, request.readyState);
      if (request.readyState < 4) {
        loaderToggle(true);
      } else if (request.status === 200 && request.readyState === 4) {
        const data = JSON.parse(request.responseText);
        resolve(data.results);
        loaderToggle(false);
      } else if (request.readyState === 4) {
        reject("malumotni olishni iloji bolmadi");
        loaderToggle(false);
      }
    });
    request.open("GET", resurse);
    request.send();
  });
};

let reload = () => {
  getTodos(API)
    .then((data) => {
      updataUI(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
document.addEventListener("DOMContentLoaded", reload);
