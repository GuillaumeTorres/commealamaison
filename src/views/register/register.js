import angular from 'angular';

export default ($scope, $http, $state, $localStorage) => {
	if($localStorage.user){
		$state.go('home');
	}
	$scope.registered = false;
	$scope.invalidPass = false;
	$scope.register = (data) => {
		$scope.invalidPass = false;
		if($scope.passwordConfirm != data.password){
			$scope.invalidPass = true;
		}else{
			$http.post('/auth/signin', data).success(response => {
				$scope.registered = true;
				setTimeout(() => {
					$state.go('home');
				}, 2000);
			});
		}
	};
}