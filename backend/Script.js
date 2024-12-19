document.getElementById("email-error").style.visibility = "hidden";
document.getElementById("password-error").style.visibility = "hidden";

class EmailValiadte {
  returns = false;
  valid(value) {
    value.length === 0 ? (this.returns = false) : (this.returns = true);
    return this.returns;
  }
}

class PasswordValidate {
  returns = false;
  valid(value) {
    value.length === 0 ? (this.returns = false) : (this.returns = true);
    return this.returns;
  }
}

class Validate {
  getEmail(email) {
    const obj = new EmailValiadte();
    return obj.valid(email);
  }

  getPassword(password) {
    const obj = new PasswordValidate();
    return obj.valid(password);
  }
}

document.getElementById("btn-login").addEventListener("click", (e) => {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  const valids = new Validate();
  valids.getEmail(email) == false
    ? (document.getElementById("email-error").style.visibility = "visible")
    : (document.getElementById("email-error").style.visibility = "hidden");
  valids.getPassword(password) == false
    ? (document.getElementById("password-error").style.visibility = "visible")
    : (document.getElementById("password-error").style.visibility = "hidden");
  if (
    valids.getEmail(email) === true &&
    valids.getPassword(password) === true
  ) {
    alert("success");
    location.reload();
  }
});

document.getElementById("icon-2").addEventListener("click", () => {
  document.getElementById("password").type === "text"
    ? (document.getElementById("password").type = "password")
    : (document.getElementById("password").type = "text");
});
