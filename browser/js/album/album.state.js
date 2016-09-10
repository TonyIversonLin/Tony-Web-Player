app.config(function($stateProvider){
	$stateProvider.state('album',{
		url: '/albums/:id',
		templateUrl: '/js/album/album.template.html',
		controller: 'albumControl',
		resolve: {
			theAlbum: function(AlbumsFactory,$stateParams){
				return AlbumsFactory.fetchById($stateParams.id)
			}
		}
	})
})