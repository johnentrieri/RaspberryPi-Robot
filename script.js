function processKeyDown(event) {
	var key_pressed = event.which;

	if (key_pressed == 37) {
		document.getElementById("left_arrow_img").src = "img/left_press.jpg";
	}
	else if (key_pressed == 38) {
		document.getElementById("up_arrow_img").src = "img/up_press.jpg";
	}
	else if (key_pressed == 39) {
		document.getElementById("right_arrow_img").src = "img/right_press.jpg";
	}
	else if (key_pressed == 40) {
		document.getElementById("down_arrow_img").src = "img/down_press.jpg";
	}
}
		
function processKeyUp(event) {
	var key_pressed = event.which;
	
	if (key_pressed == 37) {
		document.getElementById("left_arrow_img").src = "img/left.jpg";
	}
	else if (key_pressed == 38) {
		document.getElementById("up_arrow_img").src = "img/up.jpg";
	}
	else if (key_pressed == 39) {
		document.getElementById("right_arrow_img").src = "img/right.jpg";
	}
	else if (key_pressed == 40) {
		document.getElementById("down_arrow_img").src = "img/down.jpg";
	}
}