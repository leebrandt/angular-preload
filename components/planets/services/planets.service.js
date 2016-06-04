(function(){

	var planetsSvc = function($resource){
		return $resource('http://swapi.co/api/planets/');
	};

	angular.module('planets')
		.factory('PlanetsSvc', ['$resource', planetsSvc])
}());