var app = angular.module('myApp', []);

app.controller('uiCtrl', function($scope, $timeout) {
    var states = ['state0', 'state1', 'state2', 'state3'],
        initialState = 0,
        currentState = initialState,
        totalStates = states.length,
        finalState = totalStates - 1,
        timer;
        cardJson = {
            title: "Bill Murray",
            subtitle: "Thinks you're awesome",
            supportContent: "Post-ironic helvetica mlkshk, readymade whatever meditation blog offal irony. Pop-up kickstarter seitan iPhone.",
            detailsTitle: "And here's why...",
            details: "Food truck kitsch jean shorts farm-to-table. Single-origin coffee 8-bit gochujang taxidermy, ramps before they sold out neutra farm-to-table franzen iPhone truffaut selvage XOXO microdosing. Whatever affogato DIY typewriter, cold-pressed banh mi four dollar toast literally mustache put a bird on it truffaut try-hard dreamcatcher. Paleo kombucha lomo forage disrupt etsy. Tofu keffiyeh kombucha wayfarers umami, food truck art party keytar. Roof party polaroid chartreuse trust fund chillwave fap wayfarers, selfies before they sold out. IPhone pickled truffaut sartorial, forage hammock polaroid authentic marfa gentrify. Semiotics pork belly mustache, schlitz next level ennui keytar. Etsy dreamcatcher single-origin coffee kinfolk meggings whatever. Polaroid sustainable try-hard cornhole quinoa.",
        }
    $scope.currentState = states[currentState];
    $scope.card = cardJson;
    
    function change() {
        if (currentState < finalState) {
            $scope.showDetails = true;
            currentState++;
            $scope.currentState = states[currentState];
        }

        else {
            currentState = initialState;
            $scope.showDetails = false;
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
