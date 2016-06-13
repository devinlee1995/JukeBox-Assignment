var count = 0;
var total = 3;
function JukeBox(){
	this.audio_array = [
		'Eat.mp3',
		'Just.mp3',
		'Sponsor.mp3'
	];
	this.audie = document.getElementById("myAudio");
	this.audie.src = this.audio_array[count];
	this.play = function() {
		document.getElementById("song_playing").innerHTML = this.audio_array[count];
	    this.audie.play();
	};
	this.pause = function() {
	    this.audie.pause();
	};
	this.stop = function() {
	    this.audie.pause();
	    count = (count + 1)%total;
	    this.audie.src = this.audio_array[count];
	    document.getElementById("song_playing").innerHTML = this.audio_array[count];
	};
	this.add = function(audioFile) {
		if (audioFile != "") {
			this.audio_array.push(audioFile);	
		    total = total + 1;
		    console.log(this.audio_array);
		};
	};
};

var juk = new JukeBox();
juk.play();

document.getElementById("Play").onclick=function(){
	juk.play();
};

document.getElementById("Pause").onclick=function(){
	juk.pause();
};

document.getElementById("Stop").onclick=function(){
	juk.stop();
};

$(".activate-modal").click(function(e){
    e.preventDefault(); //dont follow the link
    $(".modal-wrapper").show(); //show our modal
    //add the .modal-on class to <body>
    $("body").addClass("modal-on");   
 });

$(".add").click(function(e){
    e.preventDefault();
    $(".modal-wrapper").hide();
    $("body").removeClass("modal-on");
    var new_song = document.getElementById('song_name').value;
    juk.add(new_song);
  });

$(".exit").click(function(e){
	e.preventDefault();
	//basically the opposite of activate
	$(".modal-wrapper").hide();
	$("body").removeClass("modal-on");
});


