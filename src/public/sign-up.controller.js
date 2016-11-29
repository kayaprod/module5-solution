(function () {
"use strict";

angular.module('public')
.controller('signupController', signupController);
signupController.$inject = ['MenuService'];
function signupController(MenuService) {
  var signupCtrl = this;
  var promise;
  var mypreferences = {};
  var myboolean;
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
    // message ok
    myboolean = true;
    })
    .catch(function(error){
      console.log("No such menu number exits!")
      // message Nok
      myboolean = false;
    });
  };
}
})();
