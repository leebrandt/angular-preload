(function(){
  
  var characterCtrl = function(CharacterSvc){
    var ctrl = this;

    ctrl.loadCharacters = function(){
      ctrl.characters = CharacterSvc.LoadCharacters().$$state;  
    };
    
    return ctrl;
  };
  
  angular.module('characters')
    .controller('CharacterCtrl', ['CharacterSvc', characterCtrl])
}());