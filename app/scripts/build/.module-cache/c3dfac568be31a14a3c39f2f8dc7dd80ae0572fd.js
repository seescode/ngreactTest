angular.module('app', ['react']).
controller('ctl', function ($scope) {   
    
	$scope.toOutput = 'onload';
	var click = function(name) {
		alert('hi ' + name);	
		$scope.toOutput = name;
	};
	
	$scope.click = click;
	
	$scope.person = {
		fname: 'y',
		lname: 'b',
		click: click
	};

});