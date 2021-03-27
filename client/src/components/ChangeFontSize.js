/*	change font size of ALL <p> and <pre> elements on the page.
	buttons for font size control must be in:
	
	<div id="fontsizer">
		<ul>
			<li>A</li>
			<li>A</li>
			<li>A</li>

		</ul>
	</div>
*/
const ChangeFontSize = () => {
	var sizebtns = document.querySelectorAll("#fontsizer li");

	sizebtns[0].addEventListener('click', ()=>{changefontSize('medium')});
	sizebtns[1].addEventListener('click', ()=>{changefontSize('large')});
	sizebtns[2].addEventListener('click', ()=>{changefontSize('x-large')});

	function changefontSize(fsize) {
		let pars = document.querySelectorAll('p');
		let codesnips = document.querySelectorAll('pre');

		for (let i = 0; i < pars.length; i++) {
			pars[i].style.fontSize = fsize;
		}
		for (let i = 0; i < codesnips.length; i++) {
			codesnips[i].style.fontSize = fsize;
		}
	}
}

export default ChangeFontSize;

