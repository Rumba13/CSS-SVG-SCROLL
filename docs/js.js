"use strict";
const section = document.querySelector('section');
window.addEventListener('scroll', (e) => {
	let y = window.scrollY;
	section.style.clipPath = "circle(" + (y + 200) / 2 + "px at center)"
})