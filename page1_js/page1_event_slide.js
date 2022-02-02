var event_slide_index = 1;
var now_position = 0;

function next()
{
	event_slide_index++;
	var slide = document.getElementById("event_slide");
	var next_button = document.getElementById("next_button");
	var pre_button = document.getElementById("pre_button");
	slide.style.transition = "0.3s";
	if(event_slide_index == 3)
	{
		next_button.style.display = "none";
	}
	if(event_slide_index == 2)
	{
		pre_button.style.display = "block";
	}
	if(event_slide_index == 4)
	{
		now_position = 0;
		event_slide_index = 1;
		slide.style.transform = "translateX(0px)";
		next_button.style.display = "block";
		pre_button.style.display = "none";
	}
	else
	{
		slide.style.transform = "translateX(-"+(now_position + 978)+"px)";
		now_position += 978;
	}
}

function pre()
{
	event_slide_index--;
	var slide = document.getElementById("event_slide");
	slide.style.transition = "0.3s";
	if(event_slide_index == 2)
	{
		var next_button = document.getElementById("next_button");
		next_button.style.display = "block";
	}
	if(event_slide_index == 1)
	{
		var pre_button = document.getElementById("pre_button");
		pre_button.style.display = "none";
	}
	slide.style.transform = "translateX(-"+(now_position - 978)+"px)";
	now_position -= 978;
}

var timer = setInterval(function(){next();}, 3000);

function event_pause(a)
{
	a.style.display = "none";
	var play_button = document.getElementById("event_play");
	play_button.style.display = "inline-block";
	clearInterval(timer);
}

function event_play()
{
	var play_button = document.getElementById("event_play");
	play_button.style.display = "none";
	var pause_button = document.getElementById("event_pause");
	pause_button.style.display = "inline-block";
	timer = setInterval(function(){next();}, 3000);
}