$(document).ready(function(){
	$('.next').on('click', function(){
		var currentImg = $('.active');
		var nextImg = currentImg.next();

		if (nextImg.length) {
			currentImg.removeClass('active').css('z-index', -10);
			nextImg.addClass('active').css('z-index', 10);
		}
	});
	$('.prev').on('click', function(){
	var currentImg = $('.active');
		var prevImg = currentImg.prev();

		if (prevImg.length) {
			currentImg.removeClass('active').css('z-index', -10);
			prevImg.addClass('active').css('z-index', 10);
		}
	});
});
$(document).ready(function(){
	var counter = 1;
	$('.next').css('visibility', 'visible');
	$('.prev').css('visibility', 'hidden');

	$('.next').on('click', function(){
		counter++;
		if (counter >= 5) {
		$('.next').css('visibility', 'hidden');
		}
		if (counter >=2) {
		$('.prev').css('visibility', 'visible');
		}
	});
	$('.prev').on('click', function(){
		counter--;
		if (counter <= 4) {
		$('.next').css('visibility', 'visible');
		}
		if (counter <= 1) {
		$('.prev').css('visibility', 'hidden');
		}
	});
});