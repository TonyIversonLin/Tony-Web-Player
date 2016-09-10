app.controller('artistsControl',function($scope,$log,theArtists){
	// $scope.show = false;
	// $rootScope.$on('viewSwap',function(event,data){
	// 	console.log('i am looking for all artist');
	// 	if(data.view==="allArtists") $scope.show = true;
	// 	else $scope.show = false;
	// });
	// $scope.viewOneArtist = (artist) => {
	// 	$rootScope.$broadcast('viewSwap',{view:'oneArtist',id: artist.id});
	// }	
	// ArtistsFactory.fetchAll()
	// 	.then( artists => $scope.artists = artists)
	// 	.catch($log.error);

	$scope.artists = theArtists;
})