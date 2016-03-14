import angular from 'angular';

export default ($scope, $http) => {
	$scope.register = () => {
		let recup = {
			last: $scope.lastname,
			first: $scope.firstname,
			email: $scope.email
		};
		console.log(recup);

		let data = {
			firstName: 'PROMISE',
			lastName: 'TEST',
			email: 'jean.dupond@gmail.com',
			address: {
				rue: '9 rue de la Paix',
				city: 'Paris',
				postal_code: '75002'
			},
			phone_number: '0683165620',
			coordinate: {
				long: 2.331241099999943,
				lat: 48.8687607
			}
		};
		$http.post('/users', data).success(response => {
			console.log(response);
		});
	}
}