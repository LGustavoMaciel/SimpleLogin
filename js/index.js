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
  //alert("Login Efetuado!");
  const form = document.getElementById("form");
  const dados = new FormData(form);
  const obj = { email: dados.get("email"), senha: dados.get("senha") };
  fetch("http://localhost:3000/login", {
    body: JSON.stringify(obj),
    method: "post",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (res) {
      console.log(res, "caui aq");
      alert(res.status);
    })
    .catch(function (error) {
      console.log(error);
    });
});
