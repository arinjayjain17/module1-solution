(function () {
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.lunchItems = "";
        $scope.message = "";
        $scope.messageClass = "";

        $scope.checkTooMuch = function () {
            if (!$scope.lunchItems.trim()) {
                $scope.message = "Please enter data first";
                $scope.messageClass = "empty";
                return;
            }

            var items = $scope.lunchItems.split(',');
            var itemCount = items.length;

            // Bonus: Filter out empty items
            // var nonEmptyItems = items.filter(function(item) {
            //     return item.trim() !== "";
            // });
            // itemCount = nonEmptyItems.length;

            if (itemCount <= 3) {
                $scope.message = "Enjoy!";
                $scope.messageClass = "enjoy";
            } else {
                $scope.message = "Too much!";
                $scope.messageClass = "too-much";
            }
        };
    }

})();
