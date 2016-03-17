import angular from 'angular';

export default ($scope, $http, $state) => {
	$scope.search = (data) => {
		let search = {
			type: data.type,
			range: data.range
		}
		console.log(search);
		$state.go('listoffers', {params: search});
	}
}