function CartController($scope) {
	$scope.items = [
		{title: 'Meat', quantity: 8, price: 500.66},
		{title: 'Oil', quantity: 17, price: 100.07},
		{title: 'Apple', quantity: 3, price: 14.48},
	];

	$scope.remove = function(index) {
		$scope.items.splice(index, 1);
	}

	$scope.add = function() {
		$scope.items.push({title: $scope.titleNew, quantity: 1, price: $scope.priceNew});
		$scope.titleNew = '';
		$scope.priceNew = '';
	}
}