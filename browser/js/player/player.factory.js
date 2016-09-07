app.factory('PlayerFactory',function($rootScope){

	const audio = document.createElement('audio');
	let playerFactory = {};
	let currentSong = null;
	var playStatus = false;
	var songs;
	var progress = 0;

	function nextSongIndex(status){
		var indexOfNextSong;
		var indexCurrentSong = songs.indexOf(currentSong);
		var songlistLength = songs.length;
		if(status==="next"){
			if(indexCurrentSong===songlistLength-1) return indexOfNextSong=0;
			else return (indexOfNextSong = indexCurrentSong + 1);
		};
		if(status==="previous"){
			if(indexCurrentSong===0) return indexOfNextSong=songlistLength-1;
			else return (indexOfNextSong = indexCurrentSong - 1);
		}
	}	

	playerFactory.start = (song,songlist)=>{
		if(songlist) songs = songlist;
		if(currentSong!==song){
			playerFactory.pause(song);
			currentSong = song;
		}
		audio.src = song.url;
		audio.load();
		audio.play();
		playStatus = true;
	}
	playerFactory.pause = () => {playStatus = false;audio.pause();}
	playerFactory.resume = () => {playStatus = true; audio.play();} 
	playerFactory.isPlaying = () => playStatus;
	playerFactory.getCurrentSong = () => currentSong;
	playerFactory.next = () => {
		let songIndex = nextSongIndex('next');
		let nextSong = songs[songIndex];
		playerFactory.start(nextSong);
	}
	playerFactory.previous = () => {
		let songIndex = nextSongIndex('previous');
		let nextSong = songs[songIndex];
		playerFactory.start(nextSong);
	}
	playerFactory.getProgress = () => {
		if(!audio.src) return 0;
		return progress;
	}	

	audio.addEventListener('timeupdate',function(){
		//console.log(audio.currentTime);
		progress = audio.currentTime / audio.duration * 100;
		$rootScope.$digest();
	});
	audio.addEventListener('ended', function () {
  		playerFactory.next(); // or some other way to go to the next song
  		$rootScope.$digest();
	});

	playerFactory.update = (event) => {
		let offsetX = 145;
		let wholeLength = 1420 - offsetX;
		let clickPosition = event.screenX - offsetX;
		let ratio = clickPosition / wholeLength;
		let songLength = audio.duration;
		//console.log(audio.currentTime);
		audio.currentTime = songLength*ratio;		
	}
	return playerFactory;
})