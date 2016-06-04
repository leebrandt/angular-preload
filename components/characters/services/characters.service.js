(function () {

  var characterSvc = function ($http) {

    var url = 'http://swapi.co/api/people/',
      loadCharacters = function () {
        return $http.get(url).then(
          function(result){
            return result.data;
          });
      };

    return {
      LoadCharacters: loadCharacters
    };
  };

  angular.module('characters')
    .factory('CharacterSvc', ['$http', characterSvc])
}());