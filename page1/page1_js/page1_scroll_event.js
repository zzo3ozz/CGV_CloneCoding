document.addEventListener('scroll', function()
{
	var now_scroll = document.documentElement.scrollTop;
	var goto_top = document.getElementById("goto_top");
	var goto_book = document.getElementById("goto_book");
	
	if(now_scroll >= 200)
	{
		goto_top.style.visibility = "visible";
		goto_book.style.visibility = "visible";
		goto_top.style.transition = "0.4s";
		goto_book.style.transition = "0.4s";
		goto_book.style.transform = "translateX(-10px)";
		goto_top.style.opacity = "1";

	}
	else if(now_scroll < 200)
	{
		goto_top.style.transition = "0s";
		goto_book.style.transition = "0s";
		goto_book.style.visibility = "hidden";
		goto_top.style.visibility = "hidden";
		goto_top.style.opacity = "0";
		goto_book.style.transform = "translateX(30px)";
	}
});



