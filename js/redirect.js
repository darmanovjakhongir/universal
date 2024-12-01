document.addEventListener("DOMContentLoaded", function () {
  const signInButton = document.getElementById("signInButton");
  if (signInButton) {
    signInButton.addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = "home.html";
    });
  }
});
