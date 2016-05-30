angular.module('devmtnTravel').controller('locationsCtrl', function($scope, mainSrv){
  $scope.travelInfo = mainSrv.travelInfo;

  $scope.tripId = function(id) {
    for(var i = 0; i < mainSrv.travelInfo.length; i++){
      if(mainSrv.travelInfo[i].id == id){
        $scope.tripPlan = mainSrv.travelInfo[i];
      }
    }
  };
})
