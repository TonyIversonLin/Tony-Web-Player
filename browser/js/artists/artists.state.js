app.config(function($stateProvider){
	$stateProvider.state('artists',{
		url: '/artists',
		templateUrl: '/js/artists/artists.template.html',
		controller: 'artistsControl',
		resolve: {
			theArtists: function(ArtistsFactory){
				return ArtistsFactory.fetchAll();
			}
		}
	})
})