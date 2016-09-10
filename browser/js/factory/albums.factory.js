app.factory('AlbumsFactory',function($http,$log,$q){
	
	var albumsFactory = {};
	var cachAlbums=[];

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

		if(cachAlbums[id]===undefined){
			return $http.get('/api/albums/'+id)
				.then(function(response){
					console.log('loading a new album')
					var albumWithArt = attachAlbumArt(response.data);
					cachAlbums[id] = albumWithArt;
					return albumWithArt;
				}).catch($log.error);
		}else{
			//construct a promise so the controller can use .then on the return result
			//even if we did not firing a Asy request
			console.log('using cach result');     
			var deferred = $q.defer();
			deferred.resolve(cachAlbums[id]);
			return deferred.promise;
		}
	}
	return albumsFactory;
})