(function () {

	var charConfig = function($stateProvider){
		$stateProvider
			.state('character-list',{
				url: '/characters',
				templateUrl: '/components/characters/views/characters.list.view.html'
			})
	};

  angular.module('characters', ['ui.router'])
  	.config(['$stateProvider', charConfig]);
}());