(( => {

	let badge = document.querySelector('img');

	function animImage() {
		// TweenMax.to(el, time, {props});
		TweenMax.to(badge, 0.7, {scaleX: 1.025, scaleY: 1.025, rotation: 50, ease: Eleastic.easeInOut, onComplete:FooterText });

	}

	function animFooterText() {
		TweenMax.to('h3', 0.7, {scaleX: 2, scaleY: 2, ease:Eleastic.easeOut});
	}

	badge.addEventListener('mouseover', animImage);

})();