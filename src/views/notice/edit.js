import angular from 'angular';

export default ($scope, $http) => {
	$scope.edit = () =>  {
		let recup = {
			title: $scope.titleedit,
			descriptiont: $scope.descriptionedit,
		};
		console.log(recup);

		let anc = {
			titleEdit: 'penture',
			descriptionEdit: 'je peint tresssssssssss biennnnnnnnn',
			type: 'peinture',
			date_post:1457910000
			}
		};
		$http.post('/users', data).success(response => {
			console.log(response);
		});
	}
}
