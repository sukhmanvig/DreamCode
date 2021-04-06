import React, { Fragment, useEffect } from "react";

import "../css/index.css";
import "../css/landing-style.css";
import LandingCarousel from "./LandingCarousel";

function LandingPage() {
  useEffect(() => {
    document.title = "DreamCode";
    LandingCarousel();
    let x = document.querySelector(".landingContent .rowSec:nth-child(1)") 
    x.style.backgroundImage = "linear-gradient(#ffffff10 90%, #fff), url('/images/landbg.jpg')";
  }, []);
  return (
    <main className="mainLanding">
		<div className="landingContent">
			<section className="rowSec">
        <div className="rightSide">
          <div>
          <h1 id="logoTitle">DreamCode</h1>
          <p className="dctagline">Game. Code. Dream.</p>
          <div id="btnStartLearn">Start Learning</div>
          </div>
        </div>

				<div className="lineDiv"></div>

			</section>
			<section className="rowSec">
				<section className="aboutDC">
					<h2>What is DreamCode?</h2>
					<p>This website is a development project for a software engineering course, we are a team of Computer Science students studying at the University of Toronto Mississauga. Our goal is to build an educational resource that would teach an understanding of various computer science topics. The objective of the website is to make coding and coding practices easy to understand and more welcoming to everyone regardless of prior knowledge. We encourage people to learn coding irrespective of their age or experience in the field. One of our primary focuses is to provide a resource that introduces complex topics to a beginner programmer through means of a graphical representation in games. Some of these topics can include data structures like arrays, stacks, and trees. As well as algorithms like sorting, maximum flow, and shortest path alongside basic syntax rules, variable declaration, if conditions, and looping.</p>
				</section>
				<section className="gamePrevs">
					<div><img src="/images/gprevifs.png"/></div>
					<div><img src="/images/gprevlists.png"/></div>
					<div><img src="/images/gprevqueues.png"/></div>
				</section>
			</section>
			<section className="rowSec">
				<h2>Meet The Devs</h2>
				<div className="customCar">
					<div className="customCard">
						<div className="devImg"><img/></div>
						<div className="cardInfo">
						<h3>Akeem Brisco</h3>
						<p>Computer Science Student, University of Toronto Mississauga.</p>
						</div>
					</div>
					<div className="customCard">
						<div className="devImg"><img/></div>
						<div className="cardInfo">
						<h3>Arnaud Michel</h3>
						<p>Computer Science Student, University of Toronto Mississauga.</p>
						</div>
					</div>
					<div className="customCard">
						<div className="devImg"><img/></div>
						<div className="cardInfo">
						<h3>Jazelle Diaz</h3>
						<p >CCIT and CS student at UofT. <p>I like web development and graphic design. My favourite coding language is not javascript.</p></p>
						</div>
					</div>
					<div className="customCard">
						<div className="devImg"><img/></div>
						<div className="cardInfo">
						<h3>Jayvin Chang</h3>
						<p>Computer Science Student, University of Toronto Mississauga.</p>
						</div>
					</div>
					<div className="customCard">						
						<div className="devImg"><img/></div>
						<div className="cardInfo">
						<h3>Komal Kaler</h3>
						<p>Computer Science Student, University of Toronto Mississauga.</p>
						</div>
					</div>
					<div className="customCard">
						<div className="devImg"><img/></div>
						<div className="cardInfo">
						<h3>Suhkman Vig</h3>
						<p>Computer Science Student, University of Toronto Mississauga.</p>
						</div>
					</div>
					<div className="customCard">
						<div className="devImg"><img/></div>
						<div className="cardInfo">
						<h3>Hao Mac Lee</h3>
						<p>Computer Science Student, University of Toronto Mississauga.</p>
						</div>
					</div>
					<div className="btnCarCtrl">
						<span id="btnPrev">&lt;</span>
						<span id="btnNext">&gt;</span>
					</div>
					<section className="customRadio">
						<div className="carSelect"></div>
						<div className="carSelect"></div>
						<div className="carSelect"></div>
						<div className="carSelect"></div>
						<div className="carSelect"></div>
						<div className="carSelect"></div>
						<div className="carSelect"></div>

					</section>
					
				</div>
			</section>
			
		</div>
	
	
	</main>
  );
}

export default LandingPage;
