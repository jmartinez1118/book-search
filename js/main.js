// this is our angular module / app 
var app = angular.module("myApp", [])
// this is our first controller where our logic will g
app.controller("myCtrl", function($scope, $http){

	// write get books function 
	$scope.find =function(){
		console.log($scope.search)
	

	$http.get("https://www.googleapis.com/books/v1/volumes?q=" + $scope.search)
	.then(function(response){

		$scope.books= response.data.items;
		

})
}
})
