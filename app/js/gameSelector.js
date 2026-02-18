// DOM
const gameLoad = document.querySelector(".game-load");

// game selector function
function gameSelector(data) {
  if (data == "blank") {
    return (gameLoad.innerHTML = blank);
  } else {
    return (gameLoad.innerHTML = qqsm);
  }
}
