const fileInput = document.getElementById("input");

const pink_button = document.querySelector(".pink-button");
const blue_button = document.querySelector(".blue-button");
const yellow_button = document.querySelector(".yellow-button");

const container = document.querySelector(".container");
const umbrella_image = document.querySelector(".umbrella-image");
const uploaded_logo = document.querySelector(".uploaded_logo");
const uploadbtn = document.querySelector(".upload-btn");

const loadFile = function (event) {
  const uploadlogo = document.getElementById("uploadlogo");
  uploadlogo.src = URL.createObjectURL(event.target.files[0]);
  uploadlogo.onload = function () {
    URL.revokeObjectURL(output.src); // free memory
  };
};

pink_button.addEventListener("click", function () {
  umbrella_image.setAttribute("src", "./assets/Pink umbrella.png");
  uploadbtn.style.setProperty("--uplodeBeforeBackColor", "#d0006f");
  container.classList.remove("yellow-container");
  container.classList.remove("blue-container");
  container.classList.add("pink-container");
});
blue_button.addEventListener("click", function () {
  uploadbtn.style.setProperty("--uplodeBeforeBackColor", "#00a3e0");
  umbrella_image.setAttribute("src", "./assets/Blue umbrella.png");
  container.classList.remove("yellow-container");
  container.classList.remove("pink-container");
  container.classList.add("blue-container");
});
yellow_button.addEventListener("click", function () {
  uploadbtn.style.setProperty("--uplodeBeforeBackColor", "#fed141");
  umbrella_image.setAttribute("src", "./assets/Yellow umbrella.png");
  container.classList.remove("pink-container");
  container.classList.remove("blue-container");
  container.classList.add("yellow-container");
});
