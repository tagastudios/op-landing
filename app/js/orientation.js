// DOM
const portraitLock = document.querySelector("#portrait-lock");
var qqsmModal = document.querySelector("#modal-portrait");

// First Load Logic
document.addEventListener("DOMContentLoaded", function () {
  // portrait
  if (window.innerHeight > window.innerWidth) {
    portraitLock.click();
    var m = M.Modal.getInstance(qqsmModal);
    m.options.dismissible = false;
    gameSelector("blank");
  }
  // lanscape
  else {
    gameSelector();
  }
});

// Listen for orientation changes
window.addEventListener("orientationchange", function () {
  // landscape
  if (window.innerHeight > window.innerWidth) {
    gameSelector();
  }
  // portrait
  else {
    portraitLock.click();
    var m = M.Modal.getInstance(qqsmModal);
    m.options.dismissible = false;
    gameSelector("blank");
  }
});
