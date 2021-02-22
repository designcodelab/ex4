$(document).ready(function () {

	
	var frame = '.inner';
	var box = 'article';
	var btn = '.filter li';
	var $grid;

	setTimeout(function () {
		$(frame).addClass('on');
		$grid = $(frame).isotope({
			itemSelector: box,
			columnWidth: box,
			transitionDuration: '0.8s',
			percentPosition: true
		});
	}, 1000);

	$(btn).on('click', function (e) {
		e.preventDefault();
		var sort = $(this).children('a').attr('href');
		$grid.isotope({
			filter: sort
		});

		$(btn).removeClass('on');
		$(this).addClass('on');
	});



});
