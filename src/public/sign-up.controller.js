(function () {
"use strict";

angular.module('public')
.controller('signupController', signupController);
signupController.$inject = ['MenuService','PreferencesService'];
function signupController(MenuService,PreferencesService) {
  var signupCtrl = this;
  var promise;
  var mypreferences = {};
  var myinfo = {fname:"",lname:"",email:"",phone:""};
  var myboolean = false;
  console.log("signupController instantiate");
  signupCtrl.submit = function () {
    signupCtrl.completed = true;
    console.log("submit ok:");
    console.log("Your favorite dish: ", signupCtrl.user.dishnumber);
    // retrieve the favorite dish
    promise = MenuService.getFavoriteDish(signupCtrl.user.dishnumber);
    console.log("promise", promise);
    promise.then(function(response){
    console.log("response", response);
    mypreferences = response;
    console.log("My preferences :", mypreferences);
    // Save preferences
    PreferencesService.SavePreferences(mypreferences);
    //console.log("client name : ", signupCtrl.user.firstname);
    // initialize myinfo
    myinfo.fname = signupCtrl.user.firstname;
    myinfo.lname = signupCtrl.user.lastname;
    myinfo.email = signupCtrl.user.email;
    myinfo.phone = signupCtrl.user.phone;
    console.log("client name : ", myinfo.fname);
    console.log("client phone : ", myinfo.phone);
    // save info
    PreferencesService.CopyInfo(myinfo);
    // message ok
    signupCtrl.myboolean = true;
    console.log("myboolean",signupCtrl.myboolean);
    })
    .catch(function(error){
      console.log("No such menu number exits!")
      // message Nok
      signupCtrl.myboolean = false;
    });
  };
}
})();
