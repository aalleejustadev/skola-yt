window.addEventListener('load', function () {
	// Header search trigger
	if (document.querySelector('.search-trigger')) {
		const searchTrigger = document.querySelector('.search-trigger');
		const searchEl = document.querySelector('.header--search');
		const searchClose = document.querySelector('.search-close');
		searchTrigger.addEventListener('click', function () {
			searchEl.classList.remove('none');
		});
		searchClose.addEventListener('click', function () {
			searchEl.classList.add('none');
		});
	}

	// Scroll effect on header
	if (document.querySelector('.site-header')) {
		window.addEventListener('scroll', function () {
			const siteHeader = document.querySelector('.site-header');
			if (window.scrollY >= 150) {
				siteHeader.classList.add('colored');
			} else {
				siteHeader.classList.remove('colored');
			}
		});
	}

	// Trending categories
	if (document.querySelector('.categories--slider')) {
		new Splide('.catsSlider', {
			type: 'loop',
			perPage: 4,
			perMove: 1,
			pagination: false,
			gap: '30px',
		}).mount();
	}

	// Teachers slider
	if (document.querySelector('.teacher-courses--slider')) {
		new Splide('.teacherCoursesSlider', {
			perPage: 4,
			perMove: 4,
			arrows: false,
			gap: '30px',
		}).mount();
	}
});
