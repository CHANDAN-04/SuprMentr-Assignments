let form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passError").textContent = "";
  document.getElementById("success").textContent = "";

  let valid = true;

  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required";
    valid = false;
  }

  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!email.match(emailPattern)) {
    document.getElementById("emailError").textContent = "Invalid email";
    valid = false;
  }

  if (password.length < 6) {
    document.getElementById("passError").textContent =
      "Password must be at least 6 characters";
    valid = false;
  }

  if (valid) {
    document.getElementById("success").textContent = "Registration Successful!";
  }
});
