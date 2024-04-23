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
      facingMode,
      width: 960,
      height: 960 * 1.333,
      aspectRatio: { ideal: 1.333 },
      focusMode: 'single-shot',
      exposureMode: 'single-shot'
    }
  };
  console.log(constraints);
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then((stream) => {
      video.setAttribute("autoplay", "");
      video.setAttribute("muted", "");
      video.setAttribute("playsinline", "");
      video.width = window.innerWidth;
      video.style.height = "100%";
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
