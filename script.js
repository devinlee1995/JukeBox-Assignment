//counter for the song array
var count = 0;
//total number of songs in the array
var total = 4;

function JukeBox(){
	this.audio_array = [ //the available songs
		'Eat.mp3',
		'Just.mp3',
		'Sponsor.mp3',
		'What2Do.mp3'
	];
	//setting the firsy song automatically
	this.audie = document.getElementById("myAudio");
	this.audie.src = this.audio_array[count];

	//function for the playing a song
	this.play = function() {
		document.getElementById("status").innerHTML = "Playing"
		document.getElementById("song_playing").innerHTML = this.audio_array[count];
		//this code is for highlighing the current song loaded
		for (var j = 0; j < total; j++) {
			var sample = this.audio_array[j];
			var array = sample.split(".");
			document.getElementById(array[0]).style.color = "#000000";
		}
		var current = this.audio_array[count].split(".");
		document.getElementById(current[0]).style.color = "#ff8fa3";
	    this.audie.play();
	};

	//functino for pausing a song
	this.pause = function() {
		document.getElementById("status").innerHTML = "Paused"
	    this.audie.pause();
	};

	//function for stopping the current song and loads the next one
	//it does not play the next song
	this.stop = function() {
		document.getElementById("status").innerHTML = "Stopped"
	    this.audie.pause();
	    count = (count + 1)%total;
	    this.audie.src = this.audio_array[count];
	    //this code is for highlighing the current song loaded
	    for (var j = 0; j < total; j++) {
			var sample = this.audio_array[j];
			var array = sample.split(".");
			document.getElementById(array[0]).style.color = "#000000";
		}
		var current = this.audio_array[count].split(".");
		document.getElementById(current[0]).style.color = "#ff8fa3";
	    document.getElementById("song_playing").innerHTML = this.audio_array[count];
	};

	//function for the user to choose which song to play in the list
	this.load_song = function(song_name) {
		//this code is for highlighing the current song loaded
		for (var j = 0; j < total; j++) {
			var sample = this.audio_array[j];
			var array = sample.split(".");
			document.getElementById(array[0]).style.color = "#000000";
		}
  		document.getElementById(song_name).style.color = "#ff8fa3";
		var file = song_name + ".mp3";
	    this.audie.pause();
	    for (var i = 0; i < total; i++) {
	    	if (file == this.audio_array[i]) {
	    		this.audie.src = this.audio_array[i];
	    		count = i;
	    	}
	    }
	    document.getElementById("song_playing").innerHTML = this.audio_array[count];
	    this.audie.play();
	};
};

//created the jukeBox object for the page
var juk = new JukeBox();
juk.play();

//listener for the play button
document.getElementById("Play").onclick=function(){
	juk.play();
};

//listener for the pause button
document.getElementById("Pause").onclick=function(){
	juk.pause();
};

//listener for the stop button
document.getElementById("Stop").onclick=function(){
	juk.stop();
};

//The rest of these listeners are for loading a specific song
document.getElementById("Eat").onclick=function(){
	juk.load_song("Eat");
};

document.getElementById("Just").onclick=function(){
	juk.load_song("Just");
};

document.getElementById("Sponsor").onclick=function(){
	juk.load_song("Sponsor");
};

document.getElementById("What2Do").onclick=function(){
	juk.load_song("What2Do");
};


