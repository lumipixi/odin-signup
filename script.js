const passwordsRow = document.querySelector(".form-row.passwords-row");
const firstpassword = document.querySelector("input#firstpassword");
const secondpassword = document.querySelector("input#secondpassword");
const passwordError = document.querySelector(".password-error");
const submitButton = document.querySelector("#submit");

passwordsRow.addEventListener("input", () => {
  //If the password fields are not empty, begin validation
  if (firstpassword.value !== "" && secondpassword.value !== "") {
    if (firstpassword.value !== secondpassword.value) {
      firstpassword.classList.remove("pwd-match");
      firstpassword.classList.add("pwd-mismatch");
      secondpassword.classList.remove("pwd-match");
      secondpassword.classList.add("pwd-mismatch");
      passwordError.textContent = "The passwords don't match";
      submitButton.disabled = true;
    } else {
      //Remove the mismatch msg, regardless of pwd length
      //Enable the submit button
      passwordError.innerHTML = "&nbsp;";
      submitButton.disabled = false;
      //Style the inputs as valid if pwd is at least 8 characters
      if (firstpassword.value.length > 7 && secondpassword.value.length > 7) {
        firstpassword.classList.remove("pwd-mismatch");
        firstpassword.classList.add("pwd-match");
        secondpassword.classList.remove("pwd-mismatch");
        secondpassword.classList.add("pwd-match");
      } else {
        passwordError.textContent = "Must have at least 8 characters"
      }
    }
  }
});
