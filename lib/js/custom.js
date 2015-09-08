function scrollToEl(el) {
	$('html, body').animate({
		scrollTop: $(el).offset().top
	});
}

$(document).ready(function() {
	if(screen.width > 1400) {
		$('.bg1').height(screen.width*535/1400);
		$('.bg2').height(screen.width*200/1400);
		$('.bg3').height(screen.width*463/1400);
		$('.bg4').height(screen.width*535/1400);
	}
	
	$(window).on('resize', function() {
		if(screen.width > 1400) {
			$('.bg1').height(screen.width*535/1400);
			$('.bg2').height(screen.width*200/1400);
			$('.bg3').height(screen.width*463/1400);
			$('.bg4').height(screen.width*535/1400);
		}
		else {
			$('.bg1, .bg2, .bg3, .bg4').css('height', 'auto');
		}
	})
});