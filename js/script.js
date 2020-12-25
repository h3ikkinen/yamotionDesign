

$('.js-burger-toggle').on('click', function() {
    if ($(this).hasClass('active')) {
        $('.js-burgerMenu').addClass('js-active');
        $('.js-burgerOverlay').addClass('js-active');
    } else {
        $('.js-burgerMenu').removeClass('js-active');
        $('.js-burgerOverlay').removeClass('js-active');
    }
});
$('.js-burgerOverlay').on('click', () => {
	$('.js-burgerMenu').removeClass('js-active');
	$('.js-burgerOverlay').removeClass('js-active');
	$('.js-burger-toggle').removeClass('active');
});
$('.js-nav-item').on('click', (e) => {
	e.preventDefault();
	$('.js-burgerMenu').removeClass('js-active');
	$('.js-burgerOverlay').removeClass('js-active');
	$('.js-burger-toggle').removeClass('active');
});

let $burger = $('.js-burger-toggle');

$(document).on('scroll', function () {
		let position = $(document).scrollTop();
		let block_position = $('#projects').offset().top; // расположение блока, от которого и зависит фиксированность хэдера
		if (position > block_position) { // если позиция скролла страницы больше, то ставим фикс
			$burger.addClass('color-blue');
			
		} else {
			$burger.removeClass('color-blue');
		} 
});

function initProjectsSlider() {
	if (screen.width < 768) {
		const mySwiper = new Swiper('.js-projects-slider', {
			spaceBetween: 1,
			loop: true,
		})
	}
}

initProjectsSlider();
$( window ).resize(function() {
	initProjectsSlider();
});
const feedbackSlider = new Swiper('.js-feedback__slider', {
	spaceBetween: 50,
	loop: true,
	navigation: {
		nextEl: '.feedback__slider-next',
		prevEl: '.feedback__slider-prev',
	},
	breakpoints: {
	// when window width is >= 320px
		320: {
			spaceBetween: 5
		},
	// when window width is >= 480px
		480: {
			spaceBetween: 5
		},
	// when window width is >= 640px
		640: {
			spaceBetween: 50
		}
	}
}); 
if (screen.width < 769) {
	$('.feedback__slider-wrapper').removeClass('container');
}

document.addEventListener('DOMContentLoaded', () => {
	let animItems = document.querySelectorAll('._anim-items');

	if (animItems.length > 0) {
		window.addEventListener('scroll', animOnScroll);
		function animOnScroll(params) {
			for ( let i = 0; i < animItems.length; i++) {
				const animItem = animItems[i];
				const animItemHeight = animItem.offsetHeight;
				const animItemOffset = offset(animItem).top;
				const animStart = 4;
	
				let animItemPoint = window.innerHeight - animItemHeight / animStart;
	
				if (animItemHeight > window.innerHeight) {
					animItemPoint = window.innerHeight - window.innerHeight / animStart;
				}
	
				if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
					animItem.classList.add('_active');
				} else {
					if (!animItem.classList.contains('_anim-no-hide')) {
						animItem.classList.remove('_active');
					}
	
				}
			}
			
	
		}
		function offset(el) {
			const rect = el.getBoundingClientRect(),
				  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
				  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			return { top: rect.top + scrollTop, left: rect.left + scrollLeft};
		}
		setTimeout(() => {
			animOnScroll();
		}, 500);
	}
});

