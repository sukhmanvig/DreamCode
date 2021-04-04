const ProfileSetXP = () => {
    
    let xpCircle = document.querySelector(".circle-xp");
    let radius = xpCircle.r.baseVal.value;
    let circumf = 2 * radius * Math.PI;
    xpCircle.style.strokeDasharray = circumf;


    let n = (Math.floor(Math.random() * 10)) * 10;



    function setXP(num) {
        // convert circumference val to percent
        let percent = circumf - (num/100) * circumf;
        xpCircle.style.strokeDashoffset = percent;
        let xp = document.querySelectorAll(".setxp")
        for (let i = 0; i < xp.length; i++ ) {
            xp[i].innerHTML = num*100
        }
    }
    setXP(n);
}

export default ProfileSetXP