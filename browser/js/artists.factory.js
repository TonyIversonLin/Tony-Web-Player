app.factory('ArtistsFactory',function($http,$log,$q){
	
	let artistsFactory = {};

	function attachAlbumArt(album){
		album.imageUrl = '/api/albums/'+album.id+'/image';
		return album;
	}
	function attachSongUrl(song){
		song.url = '/api/songs/' + song.id + '/audio';
		return song;
	}	

	artistsFactory.fetchAll = () => {
		return $http.get('/api/artists')
			.then(response => response.data)
			.catch($log.error);
	}
	artistsFactory.fetchById = (id) => {
		let gettingArtist = $http.get('/api/artists/'+id);
		let gettingAlbums = $http.get('/api/artists/'+id+ '/albums');
		let gettingSongs = $http.get('/api/artists/'+id+ '/songs');
		return $q.all([gettingArtist,gettingAlbums,gettingSongs])
			.then(function(response){
				console.log(response);
				let artist = response[0].data;
				let albums = response[1].data;
				let albumsWithArt = albums.map(attachAlbumArt);
				let songs = response[2].data;
				let songsWithUrl = songs.map(attachSongUrl);
				return [artist,albumsWithArt,songsWithUrl];
			}).catch($log.error);

	}
	return artistsFactory;
})