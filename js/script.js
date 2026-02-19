console.log("js/script.js")

const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function(event) {
  event.preventDefault();

  const nameValue = document.getElementById("name").value.trim();
  const emailValue = document.getElementById("email").value.trim();

  if (nameValue === "" || emailValue === "") {
    alert("Please fill in all required fields.");
  } else {
    alert("Form submitted successfully!");
  }
});

const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click",function(){
document.body.classList.toggle("dark-mode");
});

const toggleSkills = document.getElementById("toggleSkills");
const skillsSection = document.getElementById("skillsSection");
toggleSkills.addEventListener("click",function(){
skillsSection.classList.toggle("hidden");
});

const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {
  // 1. Toggle the dark-mode class on the body
  document.body.classList.toggle("Dark-mode");
 if (document.body.classList.contains("Dark-mode")) {
    themeBtn.textContent = "Toggle light mode";
  } else {
    themeBtn.textContent = "Toggle dark Mode";
  }
});









