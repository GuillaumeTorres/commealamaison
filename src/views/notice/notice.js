import angular from 'angular';

export default function($scope, $localStorage, $http, $state, $stateParams){
	$scope.logged = $localStorage.user ? true : false;
	$scope.newNotice = data => {
		data.author = $localStorage.user._id;
		data.created = new Date();
		data.city = $localStorage.user.address.city;
		$http.post('/notice', data).success(response => {
			$scope.noticeCreated = true;
			setTimeout(() => {
				$state.go('home');
			}, 2000);
		});
	};

	if($state.current.name == 'notice'){
		console.log('dans notice !');
		let id_user = $localStorage.user._id;
		$http.get(`/notice/user/${id_user}`).success(data => {
			console.log(data);
			$scope.notices = data;
		});
	}

	if($state.current.name == 'listoffers'){
		if($localStorage.user){
			$state.go('home');
		}
		console.log('params: ',$stateParams);
		let search = {
			city: $localStorage.user.address.city,
			type: $stateParams.params.type,
			range: $stateParams.params.range
		}
		console.log(search);
		$http.post('/notice/search', search).success(data => {
			console.log(data);
			$scope.notices = data;
		});
	}
}
