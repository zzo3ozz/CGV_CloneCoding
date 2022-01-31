var ad_index = 1;

function next_ad()
{
	var ad_slide = document.getElementById("ad_slide");
	ad_slide.style.transition = "0.3s";
	if(ad_index == 1)
	{
		ad_index++;
		ad_slide.style.transform = "translateX(-195px)";
	}
	else
	{
		ad_index--;
		ad_slide.style.transform = "translateX(0px)";
	}
}

var timer_ad = setInterval(function(){next_ad();}, 3000);

function bot_ad_pause(a)
{
	a.style.display = "none";
	var ad_play_button = document.getElementById("bot_ad_play");
	ad_play_button.style.display = "inline-block";
	clearInterval(timer_ad);
}

function bot_ad_play()
{
	var ad_play_button = document.getElementById("bot_ad_play");
	ad_play_button.style.display = "none";
	var ad_pause_button = document.getElementById("bot_ad_pause");
	ad_pause_button.style.display = "inline-block";
	timer_ad = setInterval(function(){next_ad();}, 3000);
}