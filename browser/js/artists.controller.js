app.controller('artistsControl',function($scope,$rootScope,ArtistsFactory,$log){
	$scope.show = false;
	$rootScope.$on('viewSwap',function(event,data){
		console.log('i am looking for all artist');
		if(data.view==="allArtists"){
			$scope.show = true;
			ArtistsFactory.fetchAll()
				.then( artists => $scope.artists = artists)
				.catch($log.error);
		}else $scope.show = false;
	});

	$scope.viewOneArtist = (artist) => {
		$rootScope.$broadcast('viewSwap',{view:'oneArtist',id: artist.id});
	}
})