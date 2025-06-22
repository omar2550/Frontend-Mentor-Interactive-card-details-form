const formEl = document.querySelector("form"),
  userName = document.getElementById("name"),
  number = document.getElementById("number"),
  mm = document.getElementById("mm"),
  yy = document.getElementById("yy"),
  cvc = document.getElementById("cvc");

formEl.addEventListener("submit", e => {
  e.preventDefault();

  validateInputs();
  if (validateInputs()) {
    document.querySelector("section").innerHTML = `
    <div class="bg-white p-3 text-center">
      <span>
        <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" fill="url(#a)"/><path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3"/><defs><linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse"><stop stop-color="#6348FE"/><stop offset="1" stop-color="#610595"/></linearGradient></defs></svg>
      </span>
      <h2 class="fw-bold mt-4 mb-3">Thank you!</h2>
      <p class="text-black-50">We've added your card details</p>
      <button class="main-btn done-btn w-100">Continue</button>
    </div>
  `;
  }
});

userName.addEventListener("input", e => {

  if (/^[a-z A-z]+$/g.test(e.target.value)) {
    document.getElementById("name-field").innerText = e.target.value;

  }
  if (e.target.value.trim() === "") {
    document.getElementById("name-field").innerText = "Jane Appleseed";
  }

})

number.addEventListener("input", e => {

  if (/^[0-9]+$/g.test(e.target.value)) {
    document.getElementById("number-field").innerText = e.target.value;

  }
  if (e.target.value.trim() === "") {
    document.getElementById("number-field").innerText = "0000 0000 0000 0000";
  }

})

mm.addEventListener("input", e => {

  if (/^[0-9]+$/g.test(e.target.value)) {
    document.getElementById("mm-field").innerText = e.target.value;

  }
  if (e.target.value.trim() === "") {
    document.getElementById("mm-field").innerText = "00";
  }

})

yy.addEventListener("input", e => {

  if (/^[0-9]+$/g.test(e.target.value)) {
    document.getElementById("yy-field").innerText = e.target.value;

  }
  if (e.target.value.trim() === "") {
    document.getElementById("yy-field").innerText = "00";
  }

})

cvc.addEventListener("input", e => {

  if (/^[0-9]+$/g.test(e.target.value)) {
    document.getElementById("cvc-field").innerText = e.target.value;

  }
  if (e.target.value.trim() === "") {
    document.getElementById("cvc-field").innerText = "000";
  }

})

document.addEventListener("click", e => {

  if (e.target.classList.contains("done-btn")) {
    document.querySelector("section").innerHTML = `
    <form class="w-100">
          <div class="input-box mb-3">
            <label for="name">Cardholder Name</label>
            <input
              id="name"
              class="d-block wt-2 w-100"
              type="text"
              placeholder="e.g. Jane Appleseed"
            />
            <span class="error"></span>
          </div>
          <div class="input-box mb-3">
            <label for="number">Card Number</label>
            <input
              id="number"
              class="d-block wt-2 w-100"
              type="text"
              maxlength="16"
              placeholder="e.g. 1234 5678 9123 0000"
            />
            <span class="error"></span>
          </div>
          <div class="d-flex gap-2 align-items-end">
            <div class="w-50">
              <label class="w-100 h-25">Exp. Date (MM/YY)</label>
              <div class="d-flex gap-2">
                <div class="input-box">
                  <input
                  id="mm"
                  class="w-100"
                  type="text"
                  maxlength="2"
                  placeholder="MM"
                  />
                  <span class="error"></span>
                </div>
                <div class="input-box">
                  <input
                  id="yy"
                  class="w-100"
                  type="text"
                  maxlength="4"
                  placeholder="YY"
                  />
                  <span class="error"></span>
                </div>
              </div>
            </div>
            <div class="input-box w-50">
              <label>CVC</label>
              <input
                id="cvc"
                class="w-100"
                type="text"
                maxlength="3"
                placeholder="e.g. 123"
              />
              <span class="error"></span>
            </div>
          </div>
          <button class="main-btn w-100 mt-4">Confirm</button>
        </form>
    `;

    document.getElementById("name-field").innerText = "Jane Appleseed";
  document.getElementById("number-field").innerText = "0000 0000 0000 0000";
  document.getElementById("mm-field").innerText = "00";
  document.getElementById("yy-field").innerText = "00";
  document.getElementById("cvc-field").innerText = "000";
  
  }
})

// Functions 

function setError(input, message) {

  errorDisplay = input.parentElement.querySelector(`.error`);

  errorDisplay.innerText = message;

  input.classList.add("wrong");
  input.classList.remove("correct");
}

function setCorrect(input) {

  errorDisplay = input.parentElement.querySelector(`.error`);

  errorDisplay.innerText = "";

  input.classList.add("correct");
  input.classList.remove("wrong");
}

function validateInputs() {
  const userNameValue = userName.value.trim(),
  numberValue = number.value.trim(),
  mmValue = mm.value.trim(),
  yyValue = yy.value.trim(),
  cvcValue = cvc.value.trim();

  let nameCheck = false,
    numberCheck = false,
    mmCheck = false,
    yyCheck = false,
    cvcCheck = false;

  if (userNameValue === "") {
    setError(userName, "User Name Is Required");
  } else if (!/^[a-z A-z]+$/g.test(userNameValue)) {
    setError(userName, "Invalid User Name");
  } else {
    setCorrect(userName);
    nameCheck = true;
  }

  if (numberValue === "") {
    setError(number, "Card Number Is Required");
  } else if (!/^\d+$/g.test(numberValue)) {
    setError(number, "Card Number Should be Numbers");
  } else if (numberValue.length !== 16) {
    setError(number, "Card Number Should be 16 Numbers");
  } else {
    setCorrect(number);
    numberCheck = true;
  }

  if (mmValue === "") {
    setError(mm, "Can`t be blank");
  } else if ( !(parseInt(mmValue) > 0 && parseInt(mmValue) < 13) ) {
    setError(mm, "Invalid Month");
  } else {
    setCorrect(mm);
    mmCheck = true;
  }
  
  if (yyValue === "") {
    setError(yy, "Can`t be blank");
  } else if ( !(parseInt(yyValue) >= 1990 && parseInt(yyValue) <= new Date().getFullYear())) {
    setError(yy, "Invalid Year");
  } else {
    setCorrect(yy);
    yyCheck = true;
  }

  if (cvcValue === "") {
    setError(cvc, "Can`t be blank");
  } else if (!/^\d+$/g.test(cvcValue)) {
    setError(cvc, "CVC Should be Numbers");
  } else if (cvcValue.length !== 3) {
    setError(cvc, "CVC Should be 3 Numbers");
  } else {
    setCorrect(cvc);
    cvcCheck = true;
  }

  if (nameCheck && numberCheck && mmCheck && yyCheck && cvcCheck) {
      return true;
  }
}
