app.controller('albumControl',function($scope,$http,$log,$rootScope,PlayerFactory,AlbumsFactory){

	$scope.show = false;
	$rootScope.$on('viewSwap',function(event,data){
		if(data.view==="oneAlbum"){
			console.log('i am here',data.id);
			$scope.show = true;
			AlbumsFactory.fetchById(data.id)
				.then(function(album){console.log(album);$scope.album = album})
		}else $scope.show = false;
	});

	$scope.currentSong = null;

	$scope.select = function(song){
		$scope.currentSong = song;
		$scope.playingStatus = true;
		PlayerFactory.start(song,$scope.album.songs);
	};
	$scope.getCurrentSong = () => { return PlayerFactory.getCurrentSong(); } 

	$scope.viewOneAlbum = (album) => {
		$rootScope.$broadcast('viewSwap',{view: 'oneAlbum', id: album.id})
	} 
})