
var myApp = angular.module('myApp', [
	'ngRoute', 	
	'controller'
]);

myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/', {
		templateUrl: 'partials/Welcome.html',
		controller: 'TopSellerController'
	}).
	when('/ProductDetails', {
    templateUrl: 'partials/ProductDetails.html',
    controller: 'DetailsController'
	}).
	when('/Cart', {
    templateUrl: 'partials/Cart.html'
	}).
	when('/ThankYou', {
    templateUrl: 'partials/ThankYou.html'
	})
	;
}]);