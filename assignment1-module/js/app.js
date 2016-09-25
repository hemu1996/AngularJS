(function(){
    'use strict';
    
   angular.module('lunchCheckApp', [])
    
   .controller('lunchCheckController', function($scope) {
       $scope.message="";
       $scope.check = function(){
           console.log($scope.value);
           if($scope.value==undefined || $scope.value=="")
               {
               $scope.message="Please enter data first";
           }
           else{
           var stringToSplit = $scope.value;
           var arrayOfStrings = stringToSplit.split(',');
           if(arrayOfStrings.length <=3){
           $scope.message="Enjoy!";
           }
           else{
               $scope.message="Too much!";
           }
               }
       };
       
   });
    
})();