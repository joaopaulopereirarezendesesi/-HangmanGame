const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm_password").value;

  if (password !== confirmPassword) {
    alert("As senhas não coincidem.");
    event.preventDefault();
  }
});