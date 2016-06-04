(function(){

	var config = function($stateProvider){
		$stateProvider
			.state('planet-list', {
				url:'/planets',
				templateUrl: '/components/planets/views/planet.list.view.html'
			});
	};

	angular.module('planets', ['ui.router', 'ngResource'])
		.config(['$stateProvider', config]);
}());