const button = document.getElementById("btn");

// SOURCE: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

button.addEventListener("click", () => {
  const inputWrappers = document.querySelectorAll(".input-wrapper");
  const fields = document.querySelectorAll(".input-wrapper input");
  const msgEmpty = "cannot be empty";
  const emailInvalid = "Looks like this is not an email";

  for (let i = 0; i < fields.length; i++) {
    // Get capitalize name field
    const fielName =
      fields[i].id.charAt(0).toUpperCase() + fields[i].id.slice(1);
    // Control fields
    if (fields[i].value.length === 0) {
      inputWrappers[i].classList.add("error");
      inputWrappers[i].setAttribute("data-before", `${fielName} ${msgEmpty}`);
    } else if (fielName === "Email" && !validateEmail(fields[i].value)) {
      inputWrappers[i].classList.add("error");
      inputWrappers[i].setAttribute("data-before", emailInvalid);
    } else {
      inputWrappers[i].classList.remove("error");
    }
  }
});
