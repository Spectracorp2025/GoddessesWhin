window.addEventListener("load", () => {
  const rotateMessage = document.getElementById("rotate-message");
  const detailsWindow = document.getElementById("details-window");
  const bgMusic = document.getElementById("bg-music");
  const musicBtn = document.getElementById("music-btn");

  let musicEnabled = false;

  function checkOrientation() {
    if (window.innerWidth > window.innerHeight) {
      rotateMessage.style.display = "none";
      detailsWindow.classList.remove("hidden");
      musicBtn.style.display = "block";
    } else {
      rotateMessage.style.display = "block";
      detailsWindow.classList.add("hidden");
      musicBtn.style.display = "none";
    }
  }

  musicBtn.addEventListener("click", () => {
    if (!musicEnabled) {
      bgMusic.play().then(() => {
        musicEnabled = true;
        musicBtn.textContent = "⏸ Pausar";
      }).catch(err => console.log("Error:", err));
    } else {
      bgMusic.pause();
      musicEnabled = false;
      musicBtn.textContent = "▶ Música";
    }
  });

  window.addEventListener("resize", checkOrientation);
  checkOrientation();
});