app.controller('albumControl',function($scope,$http,$log,$rootScope,PlayerFactory){

	$http.get('/api/albums/1')
		.then(function(response){
			var albumFromServer = response.data;
			//console.log(albumFromServer);
  			albumFromServer.imageUrl = '/api/albums/' + albumFromServer.id + '/image';
			$scope.album = response.data;
			$rootScope.$broadcast('albumSongs',$scope.album);
		}).catch($log.error);

	$scope.currentSong = null;

	$scope.select = function(song){
		$scope.currentSong = song;
		$scope.playingStatus = true;
		PlayerFactory.start(song,$scope.album.songs);
	};
	$scope.getCurrentSong = () => { return PlayerFactory.getCurrentSong(); }
})