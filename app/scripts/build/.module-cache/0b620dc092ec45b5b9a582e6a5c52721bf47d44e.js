angular.module('app', ['react']).
controller('ctl', function ($scope) {   
    
	var click = function(name) {
		alert('hi ' + name);	
	};
	
	$scope.click = click;
	
	$scope.person = {
		fname: 'y',
		lname: 'b',
		click: click
	};

});