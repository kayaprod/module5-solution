(function () {
"use strict";
angular.module('public')
.controller('myInfoController',myInfoController);
myInfoController.$inject = ['MenuService','PreferencesService'];
function myInfoController(MenuService,PreferencesService) {
  var info = this;
  var preferences;
  var name;
  var description;
  var short_name;
  var mybool;
  info.data;

  console.log("MyInfoController instantiate");

  //Retrieve preferences
  preferences = PreferencesService.GetPreferences();
  if(typeof preferences != "undefined")
  {
    info.mybool = true;
    console.log("Value of preferences in myInfoController",preferences);
    info.name = preferences.name;
    console.log("Preference name : ",info.name);
    info.description = preferences.description;
    console.log("Preference description : ",info.description);
    info.short_name = preferences.short_name;
    console.log("short name : ",info.short_name);
    info.data = PreferencesService.RetrieveInfo();
    console.log("lastname in MyInfoController :",info.data.lname)
  }
  else {
         console.log("no object");
         info.mybool = false;
  }

}
})();
