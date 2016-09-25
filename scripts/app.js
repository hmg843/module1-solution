(function(){
  'ue strict';

  angular.module('LunchCheck', [])
         .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ["$scope"];
  function LunchCheckController($scope)
  {
      $scope.LunchMenu = "Turkey,Olives,Cheese,Red Peppers,Beans";
      $scope.LunchMenuCheckResult = "";
      $scope.CheckLunchMenu = function() {
      var LunchMenu = $scope.LunchMenu;
        console.log( "Lunch Menu:" + LunchMenu);
      };
  };
})();
