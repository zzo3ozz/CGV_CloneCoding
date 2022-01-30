
function v_pause()
{
	var pause_button = document.getElementById("pause");
	pause_button.style.display = "none";
	var play_button = document.getElementById("play");
	play_button.style.display = "inline";
	var tv = document.getElementById("trailer_video");
	tv.pause();

}

function v_play()
{
	var pause_button = document.getElementById("pause");
	pause_button.style.display = "inline";
	var play_button = document.getElementById("play");
	play_button.style.display = "none";
	var tv = document.getElementById("trailer_video");
	tv.play();

}

function v_muted()
{
	var unmuted_button = document.getElementById("unmuted");
	unmuted_button.style.display = "inline";
	var muted_button = document.getElementById("muted");
	muted_button.style.display = "none";
	var tv = document.getElementById("trailer_video");
	tv.muted = false;
}

function v_unmuted()
{
	var unmuted_button = document.getElementById("unmuted");
	unmuted_button.style.display = "none";
	var muted_button = document.getElementById("muted");
	muted_button.style.display = "inline";
	var tv = document.getElementById("trailer_video");
	tv.muted = true;
}

var m_now_position=0;

function next_m(a)
{
	var slide = document.getElementById("slide_list_mc");
	slide.style.transition = "0.5s";
	if(m_now_position == 968*2)
	{
		a.style.display = "none";
	}
	if(m_now_position == 0)
	{
		var pre_button = document.getElementById("pre_button_m");
		pre_button.style.display = "block";
	}
	slide.style.transform = "translateX(-"+(m_now_position + 968)+"px)";
	m_now_position += 968;
}

function pre_m()
{
	var slide = document.getElementById("slide_list_mc");
	slide.style.transition = "0.5s";
	if(m_now_position != 968*2)
	{
		var next_button = document.getElementById("next_button_m");
		next_button.style.display = "block";
	}
	if(m_now_position == 968)
	{
		var pre_button = document.getElementById("pre_button_m");
		pre_button_m.style.display = "none";
	}
	slide.style.transform = "translateX(-"+(m_now_position - 968)+"px)";
	m_now_position -= 968;
}

var e_now_position=0;

function next_ex()
{
	var slide = document.getElementById("slide_list_ex");
	slide.style.transition = "0.5s";
	if(e_now_position == 968*2)
	{
		var next_button = document.getElementById("next_button_ex");
		next_button.style.display = "none";
	}
	if(e_now_position == 0)
	{
		var pre_button = document.getElementById("pre_button_ex");
		pre_button.style.display = "block";
	}
	slide.style.transform = "translateX(-"+(e_now_position + 968)+"px)";
	e_now_position += 968;
}

function pre_ex()
{
	var slide = document.getElementById("slide_list_ex");
	slide.style.transition = "0.5s";
	if(e_now_position != 968*2)
	{
		var next_button = document.getElementById("next_button_ex");
		next_button.style.display = "block";
	}
	if(e_now_position == 968)
	{
		var pre_button = document.getElementById("pre_button_ex");
		pre_button.style.display = "none";
	}
	slide.style.transform = "translateX(-"+(e_now_position - 968)+"px)";
	e_now_position -= 968;
}

function font_weight_mc(a)
{
	a.style.fontWeight = "700";
	a.style.color = "rgb(34, 34, 34)";
	var b = document.getElementById("menu_ex")
	b.style.fontWeight = "500";
	b.style.color = "rgb(102, 102, 102)";
	var c = document.getElementById("expection");
	c.style.display = "none";
	var d = document.getElementById("moviechart");
	d.style.display = "block";
}

function font_weight_ex(a)
{
	a.style.fontWeight = "700";
	a.style.color = "rgb(34, 34, 34)";
	var b = document.getElementById("menu_mc")
	b.style.fontWeight = "500";
	b.style.color = "rgb(102, 102, 102)";
	var c = document.getElementById("expection");
	c.style.display = "block";
	var d = document.getElementById("moviechart");
	d.style.display = "none";
}