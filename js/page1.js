// JavaScript Document

	/* Animation du changement de taille du nav */

	$(document).ready(function(){       
    	var scroll_start = 0;
    	var startchange = $('#logo-mmission');
		var offset = startchange.offset();
     	$(document).scroll(function() { 
			scroll_start = $(this).scrollTop();
       		if(scroll_start > offset.top) {
          		$('.nav-container').css('background-color', '#6a583d');
				$('.nav-container').css('height', '60px');
				$('.nav-container > li').css('font-size', '150%');
				$('.nav-container > li').css('font-size', '150%');
				$('.nav-container > li').css('transition-duration', '0.2s');
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

	/* Effet de parallaxe des nuages du header */
	var parallaxInstance = new Parallax($('.parallax-container')[0]);

	/* Fonctions qui permettent au clic sur un des logos des poles de faire apparaitre le slider correspondant */
	function graph()
		{
			$('.container-av').css('display', 'none'); //****
			$('.container-prog').css('display', 'none');//****
			$('.container-com').css('display', 'none'); //***
			$('.container-graph').css('display', 'block'); //****
			$('#graphcol').css('display', 'block');
			$('#graph').css('display', 'none');
			$('#avcol').css('display', 'none');
			$('#av').css('display', 'block');
			$('#comcol').css('display', 'none');
			$('#com').css('display', 'block');
			$('#progcol').css('display', 'none');
			$('#prog').css('display', 'block');
		}
		
	function av()
		{
			$('.container-av').css('display', 'block'); //****
			$('.container-prog').css('display', 'none');//****
			$('.container-com').css('display', 'none');//****
			$('.container-graph').css('display', 'none');//****
			$('#graphcol').css('display', 'none');
			$('#graph').css('display', 'block');
			$('#avcol').css('display', 'block');
			$('#av').css('display', 'none');
			$('#comcol').css('display', 'none');
			$('#com').css('display', 'block');
			$('#progcol').css('display', 'none');
			$('#prog').css('display', 'block');
		}

	function com()
		{
			$('.container-av').css('display', 'none');//****
			$('.container-prog').css('display', 'none');//***
			$('.container-com').css('display', 'block');//***
			$('.container-graph').css('display', 'none');//****
			$('#graphcol').css('display', 'none');
			$('#graph').css('display', 'block');
			$('#avcol').css('display', 'none');
			$('#av').css('display', 'block');
			$('#comcol').css('display', 'block');
			$('#com').css('display', 'none');
			$('#progcol').css('display', 'none');
			$('#prog').css('display', 'block');
		}

	function prog()
		{
			$('.container-av').css('display', 'none');
			$('.container-prog').css('display', 'block');
			$('.container-com').css('display', 'none');
			$('.container-graph').css('display', 'none');
			$('#graphcol').css('display', 'none');
			$('#graph').css('display', 'block');
			$('#avcol').css('display', 'none');
			$('#av').css('display', 'block');
			$('#comcol').css('display', 'none');
			$('#com').css('display', 'block');
			$('#progcol').css('display', 'block');
			$('#prog').css('display', 'none');
		} 

		