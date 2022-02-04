var slide_index = 1;
var now_position = 900;

function next()
{
	var slide = document.getElementById("page_link_slide");
	var first = document.getElementById("b_1st");
	var second = document.getElementById("b_2nd");
	var third = document.getElementById("b_3rd");
	slide_index++;
	
	if(slide_index == 2)
	{
		first.style.color = "white";
		second.style.color = "darkgray";
		third.style.color = "white";
	}
	else if(slide_index == 3)
	{
		first.style.color = "white";
		second.style.color = "white";
		third.style.color = "darkgray";
	}
	else
	{
		first.style.color = "darkgray";
		second.style.color = "white";
		third.style.color = "white";
	}
	slide.style.transition="0.5s";
	slide.style.transform="translateX(-"+(now_position + 900)+"px)";
	now_position += 900;
	if(slide_index == 4)
	{
		setTimeout(function(){
			slide.style.transition="0s";
			slide.style.transform="translateX(-900px)";
			slide_index = 1;
			now_position = 900;
		}, 500);	
	}
}

function pre()
{
	var slide = document.getElementById("page_link_slide");
	var first = document.getElementById("b_1st");
	var second = document.getElementById("b_2nd");
	var third = document.getElementById("b_3rd");
	slide_index--;

	if(slide_index == 2)
	{
		first.style.color = "white";
		second.style.color = "darkgray";
		third.style.color = "white";
	}
	else if(slide_index == 1)
	{
		first.style.color = "darkgray";
		second.style.color = "white";
		third.style.color = "white";
	}
	else
	{
		first.style.color = "white";
		second.style.color = "white";
		third.style.color = "darkgray";
	}
	slide.style.transition="0.5s";
	slide.style.transform="translateX(-"+(now_position - 900)+"px)";
	now_position -= 900;
	if(slide_index == 0)
	{
		setTimeout(function(){
			slide.style.transition="0s";
			slide.style.transform="translateX(-2700px)";
			slide_index = 3;
			now_position = 2700;
		}, 500);	
	}
}