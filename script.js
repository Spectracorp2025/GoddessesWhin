window.addEventListener("load", () => {
  const rotateMessage = document.getElementById("rotate-message");
  const mainContent = document.getElementById("main-content");
  const bgMusic = document.getElementById("bg-music");
  const musicBtn = document.getElementById("music-btn");

  let musicEnabled = false;

  function checkOrientation() {
    if (window.innerWidth > window.innerHeight) {
      rotateMessage.style.display = "none";
      mainContent.classList.remove("hidden");

      // Intentar reproducir música automáticamente
      bgMusic.play().then(() => {
        musicEnabled = true;
        musicBtn.textContent = "⏸";
        musicBtn.classList.remove("hidden");
      }).catch(() => {
        // Si no se puede, mostramos botón
        musicBtn.textContent = "▶";
        musicBtn.classList.remove("hidden");
      });

    } else {
      rotateMessage.style.display = "flex";
      mainContent.classList.add("hidden");
      musicBtn.classList.add("hidden");
    }
  }

  musicBtn.addEventListener("click", () => {
    if (!musicEnabled) {
      bgMusic.play().then(() => {
        musicEnabled = true;
        musicBtn.textContent = "⏸";
      }).catch(err => console.log("Error:", err));
    } else {
      bgMusic.pause();
      musicEnabled = false;
      musicBtn.textContent = "▶";
    }
  });

  window.addEventListener("resize", checkOrientation);
  checkOrientation();
});