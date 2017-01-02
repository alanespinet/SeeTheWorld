app.controller('locationsController', ['$scope', '$http', function($scope, $http){
   $http.get('pseudoData/locations.json')
   .then(function(response){
     $scope.locations = response.data;
   },
   function(error){
     $scope.getError = error;
   });
}]);
