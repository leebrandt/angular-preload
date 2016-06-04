(function(){

	var placeholder = function($compile){
		return{
			restrict: 'A',
			link: function(scope, el, attrs){
				for (var i = attrs.numberOfRows - 1; i >= 0; i--) {
					var row = angular.element('<li class="placeholder" ng-if="!'+attrs.hidePlaceholders+'"></li>');
					for (var c = attrs.numberOfCells - 1; c >= 0; c--) {
						row.append(angular.element('<span></span>'));		
					}
					el.append($compile(row)(scope));
		 		}
			}
		}
	};

	angular.module('app')
		.directive('placeholder', ['$compile', placeholder]);
}());