const form = document.getElementById("form");
const error = document.querySelector(".error");
const input = document.getElementById("email");
const alert = document.querySelector(".alert");
const subscriber = document.querySelector(".subscriber");
const dismissBtn = document.querySelector(".dismiss");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));

  if (data.email === "") {
    error.classList.remove("hidden");
    input.classList.add("danger");
  } else if (!validateEmail(data.email)) {
    error.classList.remove("hidden");
    input.classList.add("danger");
  } else {
    error.classList.add("hidden");
    input.classList.remove("danger");
    subscriber.innerText = data.email;
    alert.classList.remove("hidden");
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
  }
});

dismissBtn.addEventListener("click", () => {
  alert.classList.add("hidden");
  input.value = "";
  document.body.style.overflow = "scroll";
});

const validateEmail = (email) => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
};
