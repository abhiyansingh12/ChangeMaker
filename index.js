let themeButton = document.getElementById("theme-button");
const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
}
themeButton.addEventListener("click", toggleDarkMode);

let count = 3;

const signNowButton = document.getElementById("sign-now-button");
const addSignature = () => {
  const name = document.getElementById('Name').value;
  const hometown = document.getElementById('hometown').value;

  const newSignature = document.createElement("p");
  newSignature.innerText = "🖊️ " + name + " from " + hometown + " supports this.";

  const signatures = document.querySelector(".signatures");
  signatures.appendChild(newSignature);

  document.getElementById("Name").value = "";
  document.getElementById("hometown").value = "";

  const oldCounter = document.getElementById("counter");
  oldCounter.remove();

  count = parseInt(count) + 1;
  const newCounter = document.createElement('p');
  newCounter.id = "counter";
  newCounter.innerText = "🖊️ " + count + " people have signed this petition and support this cause.";
  signatures.appendChild(newCounter);
}

const validateForm = () => {
  let containsErrors = false;
  let petitionInputs = document.getElementById("sign-petition").elements;
  const email = document.getElementById('email');

  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.length < 2) {
      containsErrors = true;
      petitionInputs[i].classList.add("error");
    } else {
      petitionInputs[i].classList.remove("error");
    }
  }
  if (!email.value.includes('.com')) {
    containsErrors = true;
    email.classList.add('error');
  } else {
    email.classList.remove('error');
  }
  if (containsErrors === false) {
    addSignature();

    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
      containsErrors = false;
    }
  }
}

signNowButton.addEventListener('click', validateForm);
