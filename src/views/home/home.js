import angular from 'angular';

export default ($scope, $http) => {
	$scope.maValue = 'Ma valeur';

	$scope.testFunction = () => {
		console.log($scope.action);
		if ($scope.action == 'get users') {
			$http.get('/users').success(data => {
				$scope.users = data;
				console.log($scope.users);
			});


		}
	}
}