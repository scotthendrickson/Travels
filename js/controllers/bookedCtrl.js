angular.module('devmtnTravel').controller('bookedCtrl', function($scope, $state, mainSrv){

  $scope.booking = '';

  $scope.bookId = function() {
    for(var i = 0; i < mainSrv.travelInfo.length; i++){
      if(mainSrv.travelInfo[i].id == $state.params.id){
        $scope.booking = mainSrv.travelInfo[i];
      }
    }
  };
  $scope.bookId();
})
