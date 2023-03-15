'use strict'

const squareBody = document.querySelector('.square-body'),
	allBlock = squareBody.querySelectorAll('.block-number'),
	arrowLeft = squareBody.querySelectorAll('.left > img'),
	arrowRight = squareBody.querySelectorAll('.right > img'),
	arrowTop = squareBody.querySelectorAll('.top > img'),
	arrowBottom = squareBody.querySelectorAll('.bottom > img'),
	reset = document.querySelector('.btn-reset');

let targetNum,
	nextNum,
	currentNum;

const swipeNum = (targetIndex, currentIndex) => {
	nextNum = +allBlock[currentIndex].textContent;
	targetNum = +allBlock[targetIndex].textContent;
	currentNum = targetNum - (targetNum - nextNum);

	allBlock[targetIndex].textContent = currentNum;
	allBlock[currentIndex].textContent = targetNum;
}

squareBody.addEventListener('click', (e) => {
	switch(true) {
		case e.target.matches('.left > img'):
			arrowLeft.forEach((left, index) => {
				if(left === e.target) {
					if(index == 0) return;

					swipeNum(index, index - 1);
				}
			});
		break;

		case e.target.matches('.right > img'):
			arrowRight.forEach((right, index) => {
				if(right === e.target) {
					if(index == 24) return;

					swipeNum(index, index + 1);
				}
			});
		break;

		case e.target.matches('.top > img'):
			arrowTop.forEach((top, index) => {
				if(top === e.target) {
					if(index <= 4) return;

					swipeNum(index, index - 5);
				}
			});
		break;

		case e.target.matches('.bottom > img'):
			arrowBottom.forEach((bottom, index) => {
				if(bottom === e.target) {
					if(index >= 20) return;

					swipeNum(index, index + 5);
				}
			});
		break;
	}
});

reset.addEventListener('click', () => {
	allBlock.forEach((block, index) => {
		block.textContent = index + 1;
	});
});