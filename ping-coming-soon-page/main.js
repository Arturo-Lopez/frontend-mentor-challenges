function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function notify() {
  var input = document.querySelector("#email");
  var form = document.querySelector(".form");

  if (input.value) {
    if (validateEmail(input.value)) {
      form.classList.remove("invalid", "empty");
      form.classList.add("event", "success");
    } else {
      form.classList.remove("empty", "success");
      form.classList.add("event", "invalid");
    }
  } else {
    form.classList.remove("invalid", "success");
    form.classList.add("event", "empty");
  }
}
