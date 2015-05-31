var HelloComponent = React.createClass({displayName: "HelloComponent",
  render: function() {
    return React.createElement("span", {onClick: this.props.click.bind(this, 'yong')}, "Hello ", this.props.fname, " ", this.props.lname);
  }
})
angular.module('app').value('HelloComponent', HelloComponent);



angular.module('app').directive('hello', function(reactDirective) {
  return reactDirective('HelloComponent');
});