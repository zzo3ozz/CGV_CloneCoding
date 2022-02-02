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
