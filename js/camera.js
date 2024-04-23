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
      width: 1920,
      // height: 720 * 1.333
    },
    zoom: false,
  };
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then((stream) => {
      const capabilities = track.getCapabilities();
      const settings = track.getSettings();
      console.log('settings: ', settings);
      console.log('capabilities: ', capabilities);
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
