$("document").ready(function(){
	var $button = $(".button-link");
	var $led = $(".led");

	$button.click(function(){
		$led.toggleClass("lit");
	});

});