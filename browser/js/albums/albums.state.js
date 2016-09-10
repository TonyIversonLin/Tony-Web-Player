app.config(function($stateProvider){
	$stateProvider.state('albums',{
		url: '/albums',
		templateUrl: '/js/albums/albums.template.html',
		controller: 'albumsControl',
		resolve: {
			allAlbums: function(AlbumsFactory){
				return AlbumsFactory.fetchAll();
			}
		}
	})
})