app.controller('playerControl',function($scope,$http,$log,$rootScope,PlayerFactory){

	$scope.getCurrentSong = () => PlayerFactory.getCurrentSong();
	$scope.toggle = function(){
		if(PlayerFactory.isPlaying()) PlayerFactory.pause();
		else PlayerFactory.resume();
	}
	$scope.playingStatus = () => PlayerFactory.isPlaying();
	$scope.next = () => PlayerFactory.next();
	$scope.previous = () => PlayerFactory.previous();
	$scope.getProgress = () => PlayerFactory.getProgress();
	$scope.update = (event) => PlayerFactory.update(event);

	document.addEventListener('keydown',function(event){
		var keycode = event.keyCode;
		console.log(keycode);
		if(keycode === 39 && $scope.playingStatus) PlayerFactory.next();
		if(keycode === 37 && $scope.playingStatus) PlayerFactory.previous();
	});
})