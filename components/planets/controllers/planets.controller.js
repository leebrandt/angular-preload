(function(){

	var planetsCtrl = function(PlanetsSvc){
		var ctrl = this;

		ctrl.loadPlanets = function(){
			ctrl.planets = PlanetsSvc.get();
		};

		return ctrl;
	};

	angular.module('planets')
		.controller('PlanetsCtrl', ['PlanetsSvc', planetsCtrl])
}());