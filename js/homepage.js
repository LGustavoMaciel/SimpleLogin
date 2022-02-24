document.getElementById("btn-exit").addEventListener("click", function (e) {
    setTimeout(function () {
        location.replace("./index.html");
    }, 1000);
    toastr.warning("Saindo !");
});
