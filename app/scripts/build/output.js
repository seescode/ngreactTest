angular.module('app').directive('output', function () {
    return {
        restrict: 'EA',
        template: '<div ng-bind="stuff" ></div>',
        replace: true,
        scope: {
          stuff: "="  
        },
        link: function (scope, element, attrs, ctrl) {           
        }        
    }
});
