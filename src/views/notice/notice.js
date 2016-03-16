import angular from 'angular';

export default function($scope, $localStorage, $http, $state){
	$scope.logged = $localStorage.user ? true : false;
	$scope.newNotice = data => {
		data.author = $localStorage.user._id;
		data.created = new Date();
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
}
