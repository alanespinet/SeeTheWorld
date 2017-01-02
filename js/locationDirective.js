app.directive('locationDir', function(){
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'templates/locationTemplate.html'
  };
});
