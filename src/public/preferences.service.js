(function () {
"use strict";
angular.module('public')
.service('PreferencesService',PreferencesService);
PreferencesService.$inject = ['MenuService'];
function PreferencesService(MenuService) {
var service = this;
var mychoice;
var data;
service.SavePreferences = function(mypreferences){
  mychoice = mypreferences;
  console.log("My choice in service preferences :",mychoice);
};
service.GetPreferences = function(){
  console.log("return mychoice :",mychoice);
  return mychoice;
};
// copy myinfo
service.CopyInfo = function(mydata){
    data = mydata;
    console.log("phone in PreferencesService :",data.phone);
};
service.RetrieveInfo = function(){
   return data;
};
}
})();
