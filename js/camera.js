function camera() {
  const video = document.getElementById("video");
  navigator.getUserMedia =
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia;
  const facingMode = "environment" || "user"; // "environment"

  const constraints = {
    audio: false,
    video: {
      facingMode: facingMode,
      width: { ideal: window.innerWidth * 2 },
      height: { ideal: window.innerHeight * 2 },
      aspectRatio: { exact: window.innerWidth / window.innerHeight },
    },
  };
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then((stream) => {
      video.setAttribute("autoplay", "");
      video.setAttribute("muted", "");
      video.setAttribute("playsinline", "");
      video.width = window.innerWidth;
      video.style.height = 'calc(var(--app-height) - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 60px)'
      video.srcObject = stream;
      try {
        appHeight()
      } catch (error) {
        
      }
    })
    .catch(() => {
      // device don't support camera → write link function here
    });
}
