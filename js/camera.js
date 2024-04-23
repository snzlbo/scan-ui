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
      width: window.innerWidth * 2,
      height: window.innerHeight * 2,
      aspectRatio: 1.777777778,
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
      video.style.height = window.innerHeight;
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
