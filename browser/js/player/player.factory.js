app.factory('PlayerFactory',function(){

	const audio = document.createElement('audio');
	let playerFactory = {};
	let currentSong = null;

	playerFactory.start = function(song){
		if(currentSong!==song){
			playerFactory.pause(song);
		}
		audio.src = song.url;
		audio.load();
		audio.play();
	}
	playerFactory.pause = function(song){
		audio.pause();
		currentSong = song;
	}

	return playerFactory
})