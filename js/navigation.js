document.addEventListener("DOMContentLoaded", function () {
  const videos = [
    document.getElementById("heroVideo"),
    document.getElementById("heroVideo2"),
    document.getElementById("heroVideo3"),
  ];

  let currentIndex = 0;

  const updateVideoDisplay = () => {
    videos.forEach((video, index) => {
      video.style.display = index === currentIndex ? "block" : "none";
    });
  };

  document
    .querySelector(".hero-link-prev")
    .addEventListener("click", function (e) {
      e.preventDefault();
      currentIndex = (currentIndex - 1 + videos.length) % videos.length;
      updateVideoDisplay();
    });

  document
    .querySelector(".hero-link-next")
    .addEventListener("click", function (e) {
      e.preventDefault();
      currentIndex = (currentIndex + 1) % videos.length;
      updateVideoDisplay();
    });

  document
    .querySelector(".hero-link-home")
    .addEventListener("click", function (e) {
      e.preventDefault();
      currentIndex = 0;
      updateVideoDisplay();
    });

  updateVideoDisplay();

  const signInButton = document.querySelector(".sign-in-btn");
  if (signInButton) {
    signInButton.addEventListener("click", function () {
      window.location.href = "sign-in.html";
    });
  }
});
