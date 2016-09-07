app.controller('albumsControl',function($scope,AlbumsFactory){
	
	AlbumsFactory.fetchAll()
		.then(function(albums){
			console.log(albums);
			$scope.albums = albums;
		})
})