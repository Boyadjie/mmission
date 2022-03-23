// JavaScript Document

$(document).ready(function() {

	function description(_this) {
		var index = $(_this).attr('data-id');
		if( ($("#desc"+index).is(":visible")) ){
			$('div.oeuvre-desc').hide('slow');
		}else{
		$('div.oeuvre-desc').hide('slow');
		$('div.oeuvre-desc[data-id="'+index+'"]').show('slow');
	}
	/*	$(document).delay(1000).scrollTo('#desc'+ index);*/
	}
	$('a[data-id]').click(function() {
		description(this);
	});

});

