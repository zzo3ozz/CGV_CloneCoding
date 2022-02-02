var m_now_position=0;

function next_m(a)
{
	var slide = document.getElementById("slide_list_mc");
	slide.style.transition = "0.3s";
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
	slide.style.transition = "0.3s";
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
	slide.style.transition = "0.3s";
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
	slide.style.transition = "0.3s";
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
