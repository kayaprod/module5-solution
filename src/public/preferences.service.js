(function () {
"use strict";
angular.module('public')
.service('PreferencesService',PreferencesService);
PreferencesService.$inject = ['MenuService'];
function PreferencesService(MenuService) {
var service = this;
var mychoice;
service.SavePreferences = function(mypreferences){
  mychoice = mypreferences;
  console.log("My choice in service preferences :",mychoice);
};
service.GetPreferences = function(){
  console.log("return mychoice :",mychoice);
  return mychoice;
};
}
})();
