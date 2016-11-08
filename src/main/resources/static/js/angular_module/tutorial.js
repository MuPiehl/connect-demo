angular.module('tutorialApp', ['ui.bootstrap'])
    .controller('OverviewCtrl', function ($scope, $http, $interval) {
        var c = 0;
        $scope.message = "This DIV is refreshed " + c + " time.";
        // $http.get('/requestOverview').then(function(overviewResponse) {
        //     $scope.overviews = overviewResponse.data;
        // });

        var timer = $interval(function () {
            $scope.message = "This DIV is refreshed " + c + " time.";
            c++;
            $scope.reloadOverviews();
            $scope.reloadDatabases();
        }, 2500);

        $scope.killtimer = function () {
            if (angular.isDefined(timer)) {
                $interval.cancel(timer);
                timer = undefined;
                $scope.message = "Timer is killed :-(";
            }
        };

        $scope.reloadOverviews = function () {
            $http.get('/requestOverview').then(function (overviewResponse) {
                $scope.overviews = overviewResponse.data;
            });
        };

        $scope.reloadDatabases = function () {
            $http.get('/ReportDataLoaderService/status/json').then(function (databasesResponse) {
                $scope.databases = databasesResponse.data;
            });
        };

        $scope.addRequest = function () {
            $http.get('/addRequest').then(function (overviewResponse) {
                $scope.overviews = overviewResponse.data;
            });

        };

        $scope.addRequest();
    });

angular.module('connect-demo', ['ui.bootstrap']).controller('PagerDemoCtrl', function ($scope, $http) {
    $scope.totalItems = 64;
    $scope.currentPage = 4;

    $scope.$watch('currentPage', function (newPage) {
        $scope.currentPage = newPage;
        console.log("Bin im $watch Handler:" + newPage);

        $scope.reloadPageData(); // beim Initialisieren der Seite wird watch ausgelöst
    });

    $scope.reloadPageData = function () {
        console.log("Bin in reloadPageData()")
        $http.get('demo/data?sliceNumber=' + $scope.currentPage).then(function (sliceResponse) {
            $scope.sliceData = sliceResponse.data;
        });
    };
});

