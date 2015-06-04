angular.module('app', ['react']).
controller('ctl', function ($scope) {   
    var vm = this;
	
	vm.person = {
		fname: 'y',
		lname: 'b'		
	};
    
	vm.click = function(name) {
		alert('hi ' + name);	
	};
});