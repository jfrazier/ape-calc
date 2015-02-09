var app = angular.module('apeCalc', []);

app.controller('ReadoutController', ['$scope', '$http', function($scope, $http) {
	$scope.readout = "0";
	$scope.endState = true;
	$scope.hasOperator = false;
	$scope.onNgClick = function (e) {
		
		if ($scope.endState && e !== "=") {
			$scope.readout = "";
			$scope.endState = false;
		}

		switch (e) {
			case "0":
				$scope.readout += "0";
				break;
			case "1":
				$scope.readout += "1";
				break;
			case "2":
				$scope.readout += "2";
				break;
			case "3":
				$scope.readout += "3";
				break;
			case "4":
				$scope.readout += "4";
				break;
			case "5":
				$scope.readout += "5";
				break;
			case "6":
				$scope.readout += "6";
				break;
			case "7":
				$scope.readout += "7";
				break;
			case "8":
				$scope.readout += "8";
				break;
			case "9":
				$scope.readout += "9";
				break;
			case "=":
				if($scope.hasOperator && $scope.endState === false) {
					$http.post('/calculate', {'exp': $scope.readout})
					.success(function(data, status, headers, config) {
						$scope.readout = data.response;
						$scope.endState = true;
						$scope.hasOperator = false;
					})
					.error(function(data, status, headers, config) {
						$scope.readout = 'err';
						$scope.endState = true;
						$scope.hasOperator = false;
					});
				} else {
					$scope.endState = true;
					$scope.hasOperator = false;
				}
				break;
			case "+":
				$scope.readout += "+";
				$scope.hasOperator = true;
				break;
			case "-":
				$scope.readout += "-";
				$scope.hasOperator = true;
				break;
			case "*":
				$scope.readout += "*";
				$scope.hasOperator = true;
				break;
			case "/":
				$scope.readout += "/";
				$scope.hasOperator = true;
				break;
			case "C":
				$scope.readout = "0";
				$scope.endState = true;
				$scope.hasOperator = false;
				break;
			default:
				break;
		}
	};
}]);
