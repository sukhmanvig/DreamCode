const ChangeFontSize = () => {
  var sizebtns = document.querySelectorAll("#fontsizer li");

  sizebtns[0].addEventListener("click", () => {
    changefontSize("medium");
  });
  sizebtns[1].addEventListener("click", () => {
    changefontSize("large");
  });
  sizebtns[2].addEventListener("click", () => {
    changefontSize("x-large");
  });

  function changefontSize(fsize) {
    let pars = document.querySelectorAll("p");
    let codesnips = document.querySelectorAll("pre");

    for (let i = 0; i < pars.length; i++) {
      pars[i].style.fontSize = fsize;
    }
    for (let i = 0; i < codesnips.length; i++) {
      codesnips[i].style.fontSize = fsize;
    }
  }
};

export default ChangeFontSize;
