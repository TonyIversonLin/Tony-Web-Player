app.config(function($stateProvider){
	$stateProvider.state('artist',{
		url: '/artists/:id',
		templateUrl: '/js/artist/artist.template.html',
		controller: 'artistControl',
		resolve: {
			theArtist: function(ArtistsFactory,$stateParams){
				return ArtistsFactory.fetchById($stateParams.id)
			}
		}
	})
	.state('artist.albums',{
		url: '/albums',
		templateUrl: '/js/artist/artist.albums.template.html'
	})
	.state('artist.songs',{
		url: '/songs',
		templateUrl: '/js/artist/artist.songs.template.html'
	});
})