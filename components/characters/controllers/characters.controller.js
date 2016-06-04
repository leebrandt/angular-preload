(function(){
  
  var characterCtrl = function(CharacterSvc){
    var ctrl = this;
    ctrl.pageSizeOptions = [3, 5, 10];
    ctrl.pageSize = 3;

    ctrl.loadCharacters = function(){
      ctrl.characters = CharacterSvc.LoadCharacters().$$state;  
    };
    
    ctrl.repeatPageSize = function(){
      return new Array(ctrl.pageSize);
    };

    return ctrl;
  };
  
  angular.module('characters')
    .controller('CharacterCtrl', ['CharacterSvc', characterCtrl])
}());