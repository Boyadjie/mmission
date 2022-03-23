$(document).ready(function(){       
	var scroll_start = 0;
	var startchange = $('.homonumericus');
	var offset = startchange.offset();
	 $(document).scroll(function() { 
		scroll_start = $(this).scrollTop();
		   if(scroll_start > offset.top) {
			  $('.nav-container').css('background-color', '#6a583d');
			$('.nav-container').css('height', '60px');
			$('.nav-container > li').css('font-size', '150%');
			$('.nav-container > li').css('transition-duration', '0.2s');
			$('.nav-container').css('transition-duration', '0.2s');
			$('#logo-nav-blanc').css('display', 'block');
		   }
			else {
				$('.nav-container').css('background-color', 'rgba(0, 0, 0, 0.10)');
				$('.nav-container').css('height', '145px');
				$('.nav-container > li').css('font-size', '200%');
				$('.nav-container > li').css('transition-duration', '0.2s');
				$('.nav-container').css('transition-duration', '0.2s');
				$('#logo-nav-blanc').css('display', 'none');
			}
	   });
});