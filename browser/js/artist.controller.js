app.controller('artistControl',function($scope,$rootScope,ArtistsFactory,$log,PlayerFactory){
	$scope.show = false;
	$rootScope.$on('viewSwap',function(event,data){
		console.log('i am looking for one artist');
		if(data.view==='oneArtist'){
			$scope.show = true;
			ArtistsFactory.fetchById(data.id)
				.then(function(dataArray){
					$scope.artist = dataArray[0]
					$scope.albums = dataArray[1];
					$scope.songs = dataArray[2];
					console.log('checking out songs',dataArray[2])
				}).catch($log.error);
		}else $scope.show = false;
	});

	$scope.currentSong = null;

	$scope.select = function(song){
		$scope.currentSong = song;
		$scope.playingStatus = true;
		PlayerFactory.start(song,$scope.songs);
	};
	$scope.getCurrentSong = () => { return PlayerFactory.getCurrentSong(); } 

	$scope.viewOneAlbum = (album) => {
		$rootScope.$broadcast('viewSwap',{view: 'oneAlbum', id: album.id})
	} 	

})