var app = angular.module('myApp', []);

app.controller('uiCtrl', function($scope, $timeout) {
    var states = ['state0', 'state1', 'state2', 'state3'],
        initialState = 0,
        currentState = initialState,
        totalStates = states.length,
        finalState = totalStates - 1,
        timer;
    $scope.currentState = states[currentState];

    function change() {
        if (currentState < finalState) {
            currentState++;
            $scope.currentState = states[currentState];
        }

        else {
            currentState = initialState;
            $scope.currentState = states[currentState];
        }

        if (currentState == finalState) {
            $timeout.cancel(timer);
        }
    }

    $scope.changeState = function() {
        change();
    }

    $scope.autoState = function() {
        timer = $timeout($scope.autoState, 300);
        change();
    }
});
