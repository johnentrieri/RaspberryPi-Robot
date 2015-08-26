function processKeyDown(event) {
	var key_pressed = event.which;
	
	if (key_pressed == 37) {
		document.getElementById("left_arrow_img").src = "img/left_press.jpg";
		$(document).load("cgi-bin/pin7on.cgi");
	}
	else if (key_pressed == 38) {
		document.getElementById("up_arrow_img").src = "img/up_press.jpg";
		$(document).load("cgi-bin/pin4on.cgi");
	}
	else if (key_pressed == 39) {
		document.getElementById("right_arrow_img").src = "img/right_press.jpg";
		$(document).load("cgi-bin/pin2on.cgi");
	}
	else if (key_pressed == 40) {
		document.getElementById("down_arrow_img").src = "img/down_press.jpg";
		$(document).load("cgi-bin/pin3on.cgi");
	}		
}
		
function processKeyUp(event) {
	var key_pressed = event.which;
	
	if (key_pressed == 37) {
		document.getElementById("left_arrow_img").src = "img/left.jpg";
		$(document).load("cgi-bin/pin7off.cgi");
	}
	else if (key_pressed == 38) {
		document.getElementById("up_arrow_img").src = "img/up.jpg";
		$(document).load("cgi-bin/pin4off.cgi");
	}
	else if (key_pressed == 39) {
		document.getElementById("right_arrow_img").src = "img/right.jpg";
		$(document).load("cgi-bin/pin2off.cgi");
	}
	else if (key_pressed == 40) {
		document.getElementById("down_arrow_img").src = "img/down.jpg";
		$(document).load("cgi-bin/pin3off.cgi");
	}
}
