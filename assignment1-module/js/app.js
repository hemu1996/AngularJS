(function() {
    'use strict';

    angular.module('lunchCheckApp', [])

    .controller('lunchCheckController', function($scope) {
        $scope.message = "";
        $scope.check = function() {
            if ($scope.value == undefined || $scope.value == "") {
                $scope.message = "Please enter data first";
                $scope.colour = {
                    "color": "red"
                };
                $scope.bordercolour = {
                    "border-color": "red"
                };
            } else {
                var stringToSplit = $scope.value;
                var arrayOfStrings = stringToSplit.split(',');
                var count = 0;
                for (var i = 0; i < arrayOfStrings.length; i++) {
                    if (arrayOfStrings[i] == "" || arrayOfStrings[i] == " ") {
                        continue;
                    } else {
                        count++;
                    }
                }
                if (count <= 3) {
                    $scope.message = "Enjoy!";
                    $scope.colour = {
                        "color": "green"
                    };
                    $scope.bordercolour = {
                        "border-color": "green"
                    };
                } else {
                    $scope.message = "Too much!";
                    $scope.colour = {
                        "color": "green"
                    };
                    $scope.bordercolour = {
                        "border-color": "green"
                    };
                }
            }
        };

    });

})();