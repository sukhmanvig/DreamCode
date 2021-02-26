let xpCircle = document.querySelector(".circle-xp");
let radius = xpCircle.r.baseVal.value;
let circumf = 2 * radius * Math.PI;
xpCircle.style.strokeDasharray = circumf;



function setXP(num) {
	// convert circumference val to percent
	let percent = circumf - (num/100) * circumf;
	xpCircle.style.strokeDashoffset = percent;

}
setXP(60);