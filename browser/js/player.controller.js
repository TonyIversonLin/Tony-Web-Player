app.controller('playerControl',function($scope,$http,$log,$rootScope){

	$rootScope.$on('albumSongs',function(event,album){
		$scope.album = album;
	})

	var audio = document.createElement('audio');
	$scope.playingStatus = false;

	$scope.play = function(song){
		$scope.currentSong = song;
		$scope.playingStatus = true;
		audio.src = song.url;
		audio.load();
		audio.play();
	};

	$rootScope.$on('playSong',function(event,song){
		$scope.play(song);
	});

	$scope.toggle = function(){
		if($scope.playingStatus) audio.pause();
		else audio.play();
		$scope.playingStatus = !$scope.playingStatus;
	}

	function nextSongIndex(status){
		var indexOfNextSong;
		var indexCurrentSong = $scope.album.songs.indexOf($scope.currentSong)
		var songlistLength= $scope.album.songs.length;
		if(status==="next"){
			if(indexCurrentSong===songlistLength-1) return indexOfNextSong=0;
			else return (indexOfNextSong = indexCurrentSong + 1);
		};
		if(status==="previous"){
			if(indexCurrentSong===0) return indexOfNextSong=songlistLength-1;
			else return (indexOfNextSong = indexCurrentSong - 1);
		}
	}

	$scope.next = function(){
		audio.pause();
		var indexOfNextSong = nextSongIndex('next');
		let nextSong = $scope.album.songs[indexOfNextSong];
		$scope.play(nextSong);
		$rootScope.$broadcast('changeSong',nextSong);
	};

	$scope.previous = function(){
		audio.pause();
		var indexOfNextSong = nextSongIndex('previous');
		let nextSong = $scope.album.songs[indexOfNextSong];
		$scope.play(nextSong);
		$rootScope.$broadcast('changeSong',nextSong);
	};

	audio.addEventListener('ended', function () {
  		$scope.next(); // or some other way to go to the next song
	});

	audio.addEventListener('timeupdate', function () {
  		$scope.progress = 100 * audio.currentTime / audio.duration;
  		$scope.$digest();
	});

	$scope.update = function(event){
		console.log(event.screenX);
		let offsetX = 145;
		let wholeLength = 1420 - offsetX;
		let clickPosition = event.screenX - offsetX;
		let ratio = clickPosition / wholeLength;
		let songLength = audio.duration;
		//console.log(audio.currentTime);
		audio.currentTime = songLength*ratio;
	}
	document.addEventListener('keydown',function(event){
		var keycode = event.keyCode;
		console.log(keycode);
		if(keycode === 39 && $scope.playingStatus) $scope.next();
		if(keycode === 37 && $scope.playingStatus) $scope.previous();
	});
})