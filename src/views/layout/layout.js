import angular from 'angular';

export default ($scope, $http, $localStorage, $state) => {
	$scope.logged = $localStorage.user ? true : false;
	$scope.user = $localStorage.user;

	$scope.login = () => {
		let data = {
			email: $scope.email,
			password: $scope.password
		}
		$http.post('/auth/login', data).success(data => {
			console.log(data);
			$scope.user = data;
			$localStorage.user = data;
			$scope.logged = true;
		});
		$scope.email = '';
		$scope.password = '';
		$state.go('home');
	}

	$scope.logout = () => {
		$localStorage.$reset();
		$scope.logged = false;
	}
}