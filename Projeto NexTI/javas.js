$('nav a').click(function(animation){
	animation.preventDefault();
	var opcao = $(this).attr('href'),
			targetOffset = $(opcao).offset().top;

	$('html, body').animate({
		scrollTop: targetOffset - 59
	}, 500);
});