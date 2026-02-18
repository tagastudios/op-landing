// LOAD ON CHARGE

document.addEventListener("DOMContentLoaded", function () {
  let lvlNumber = 1;
  level(lvlNumber);

  function level(lvlNumber) {
    console.log(lvlNumber);
    const lvlText = "nivel";
    let lvldinamico = String(lvlText + lvlNumber);

    // ALERT 45 SECS
    alert("Tienes 45 segundas para responder, exito!");

    // Call Timer
    timer();

    // CHARGE LEVEL #
    const chooselvl = data(lvldinamico);

    // DOM ANSWERS
    const r1 = document.querySelector("#qqsmR1");
    const r2 = document.querySelector("#qqsmR2");
    const r3 = document.querySelector("#qqsmR3");
    const r4 = document.querySelector("#qqsmR4");

    // EVENT LISTENERS TO ANSWERS AND LOGIC
    r1.addEventListener("click", function () {
      let n = 1;
      if (n === chooselvl) {
        alert("CORRECTO!");
        level(lvlNumber + 1);
      } else {
        alert("Sorry pero esa no era!");
      }
    });
    r2.addEventListener("click", function () {
      let n = 2;
      if (n === chooselvl) {
        alert("CORRECTO!");
        level(lvlNumber + 1);
      } else {
        alert("Sorry pero esa no era!");
      }
    });
    r3.addEventListener("click", function () {
      let n = 3;
      if (n === chooselvl) {
        alert("CORRECTO!");
        level(lvlNumber + 1);
      } else {
        alert("Sorry pero esa no era!");
      }
    });
    r4.addEventListener("click", function () {
      let n = 4;
      if (n === chooselvl) {
        alert("CORRECTO!");
        level(lvlNumber + 1);
      } else {
        alert("Sorry pero esa no era!");
      }
    });
  }

  function timer() {
    /*
  
    TIMER

  */
    const qqsmTimer = document.querySelector("#qqsm-timer");

    var timeLeft = 44;

    var timerId = setInterval(countdown, 1000);

    function countdown() {
      if (timeLeft == 0) {
        clearTimeout(timerId);
        qqsmTimer.innerHTML = `TIEMPO`;
        alert("Perdiste :(");
      } else {
        if (timeLeft < 10) {
          qqsmTimer.innerHTML = `0:0${timeLeft}s`;
        } else {
          qqsmTimer.innerHTML = `0:${timeLeft}s`;
        }
        timeLeft--;
      }
    }
  }
});
