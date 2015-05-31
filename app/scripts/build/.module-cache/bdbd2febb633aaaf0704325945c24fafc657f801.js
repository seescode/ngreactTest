angular.module('app', ['react']).
controller('ctl', function ($scope) {   
    var vm = this;
    
	vm.click = function(name) {
		alert('hi ' + name);	
	};
});