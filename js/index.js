function togglePassword() {
  const eye = document.getElementById("eye");
  const eyeSlash = document.getElementById("eye-slash");
  const fieldPassword = document.getElementById("field-password");

  eye.classList.toggle("active");

  if (eye.style.display === "none") {
    eye.style.display = "block";
    eyeSlash.style.display = "none";
    fieldPassword.type = "text";
    //console.log("caiu aq 2");
  } else {
    eye.style.display = "none";
    eyeSlash.style.display = "block";
    fieldPassword.type = "password";
    //console.log("caiu aq");
  }
}

document.getElementById("btn-login").addEventListener("click", function (e) {
  e.preventDefault();
  alert("Login Efetuado!");
});
