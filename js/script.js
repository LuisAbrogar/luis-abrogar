var section_p = document.getElementById('projs');
const proj_titles = ["                ", "CyclingCompanion", "4-Stage Pipelined MMU", "Survey Data Text Mining", "Mersive Solstice - Google Calendar Integration", "IEEE Micromouse", "8-Segment LED Digital Clock"];
(function($) {
	let x = 1000
	$('#amname').hide()
	$('div button').click(function() {
		section_p.scrollTop = 0;
		$(this).addClass('active').siblings('button').removeClass('active');
		$('div.text:nth-of-type(' + $(this).data('rel') + ')').fadeIn(x, 'linear').siblings('div.text').fadeOut(x, 'linear');

		if ($('#am').hasClass('active')) 
			$('#amname').fadeIn(x, 'linear');
		else 
			$('#amname').fadeOut(x, 'linear');

		if ($('#pr').hasClass('active'))
			$('#proj-name').show();
		else
			$('#proj-name').hide();
	});


	$.fn.inView = function() {
		var eTop = $(this).offset().top + 100;
		var eBot = eTop + $(this).outerHeight() - 800;
	
		var vTop = $('div.text').scrollTop();
		var vBot = vTop + $('div.text').height();

		if($(this).attr("id") == "p0") {
			console.log($(this).attr("id") + ":"
						+"\neTop: " + eTop 
						+"\neBot: " + eBot
						+"\nvTop: " + vTop
						+"\nvBot: " + vBot);
		}
		
		return ((eBot > vTop) && (eTop < vBot))
	}

	$('div.text').on('scroll', function() {
		//timer = 0;
		//if(timer) {
			//window.clearTimeout(timer);
		//}
		//timer = window.setTimeout(function() {
			$('section').each(function(index) {
				if($(this).inView()) {
					//console.log($(this).attr("id") + " is in view");
					$("#proj-name").text(proj_titles[index]);
					$("#proj-name").removeClass('hidden')
					$(this).removeClass('hidden');
				} else {
					if(!($(this).hasClass('top'))) {
						$(this).addClass('hidden');
						//console.log($(this).attr("id") + " is not in view");
					}
				}
			});
		//}, 250);
		
	});
})(jQuery);


