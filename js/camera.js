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
      // width: 720,
      // height: 720 * 1.333
    },
  };
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then((stream) => {
      video.setAttribute("autoplay", "");
      video.setAttribute("muted", "");
      video.setAttribute("playsinline", "");
      video.width = window.innerWidth;
      video.srcObject = stream;
    })
    .catch(() => {
      // device don't support camera → write link function here
    });
}
