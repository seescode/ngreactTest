/** @jsx React.DOM */
var HelloComponent = React.createClass({displayName: "HelloComponent",
  propTypes: {
    fname : React.PropTypes.string.isRequired,
    lname : React.PropTypes.string.isRequired,
    click : React.PropTypes.func.isRequired
  },
  render: function() {
    return React.createElement("span", {onClick: this.props.click}, "Hello ", this.props.fname, " ", this.props.lname);
  }
})
angular.module('app').value('HelloComponent', HelloComponent);



angular.module('app').directive('hello', function(reactDirective) {
  return reactDirective('HelloComponent');
});