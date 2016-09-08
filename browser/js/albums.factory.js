app.factory('AlbumsFactory',function($http,$log){
	
	var albumsFactory = {};

	function attachAlbumArt(album){
		album.imageUrl = '/api/albums/'+album.id+'/image';
		return album;
	}
	albumsFactory.fetchAll = function(){
		return $http.get('/api/albums')
			.then(function(response){
				var albums = response.data;
				var albumsWithArt = albums.map(attachAlbumArt);
				return albumsWithArt;
			}).catch($log.error);
	}
	albumsFactory.fetchById = function(id){
		return $http.get('/api/albums/'+id)
			.then(function(response){
				var albumWithArt = attachAlbumArt(response.data);
				return albumWithArt;
			}).catch($log.error);
	}
	return albumsFactory;
})