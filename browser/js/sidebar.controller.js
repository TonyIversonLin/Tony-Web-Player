app.controller('sidebarControl',function($scope,$rootScope){
	$scope.viewAlbums = () => $rootScope.$broadcast('viewSwap',{view: 'allAlbums'});
	$scope.viewArtists = () => $rootScope.$broadcast('viewSwap',{view: 'allArtists'});
})