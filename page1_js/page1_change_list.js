
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