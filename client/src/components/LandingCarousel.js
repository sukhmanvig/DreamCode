const LandingCarousel = () => {
    clearInterval();
	let slides = document.querySelectorAll(".customCard")
	let radioBtns = document.querySelectorAll(".carSelect")
	
//	carousel slider code
	var currentSlide = 0
	slides[currentSlide].className = 'customCard showing'
	radioBtns[currentSlide].className = 'carSelect carSelected'
	function nextSlide() {
		// current slide becomes hidden
		slides[currentSlide].className = 'customCard'
		radioBtns[currentSlide].className = 'carSelect'
		// set the current slide as the next one
		currentSlide = (currentSlide + 1) % slides.length
		// add the class showing to the slide to make it visible
		slides[currentSlide].className = 'customCard showing'
		radioBtns[currentSlide].className = 'carSelect carSelected'
	}
	function prevSlide() {
		// current slide becomes hidden
		slides[currentSlide].className = 'customCard'
		radioBtns[currentSlide].className = 'carSelect'
		// set the current slide as the previous one
		currentSlide = (currentSlide - 1) % slides.length
		if (currentSlide === -1) {
		  currentSlide = slides.length - 1
		}
	// add the class showing to the slide to make it visible
		slides[currentSlide].className = 'customCard showing'
		radioBtns[currentSlide].className = 'carSelect carSelected'
	}
		
		let btnprev = document.querySelector("#btnPrev")
		let btnnext = document.querySelector("#btnNext")
		
	btnnext.addEventListener('click', () => {
	// go to next slide on click of the button
	nextSlide()
	})
	btnprev.addEventListener('click', () => {
	// go to previous slide on click of the button
	prevSlide()
	})

    for (let i = 0; i < radioBtns.length; i++){
        
                
        radioBtns[i].addEventListener('click', () => {
        // go to next slide on click of the button
            
            slides[currentSlide].className = 'customCard'
            radioBtns[currentSlide].className = 'carSelect'
            currentSlide = i;
            slides[currentSlide].className = 'customCard showing'
            radioBtns[currentSlide].className = 'carSelect carSelected'
        })
    }
    
	setInterval(nextSlide, 4000)

}

export default LandingCarousel
