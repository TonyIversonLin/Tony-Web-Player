app.controller('albumsControl',function($scope,allAlbums){
	
	// $scope.show = true;
	// $rootScope.$on('viewSwap',function(event,data){
	// 	if(data.view === 'allAlbums') $scope.show = true;
	// 	else $scope.show = false;
	// });
	// $scope.viewOneAlbum = (album) => {
	// 	$rootScope.$broadcast('viewSwap',{view: 'oneAlbum', id: album.id})
	// } 	

	// AlbumsFactory.fetchAll()
	// 	.then(function(albums){
	// 		//console.log(albums);
	// 		$scope.albums = albums;
	// 	});

	$scope.albums = allAlbums;

})