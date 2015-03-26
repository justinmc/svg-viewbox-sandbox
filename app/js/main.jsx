var React = require('react');
var ViewboxForm = require('./form.jsx');
var ViewboxSVG = require('./svg.jsx');

var rootElement = document.querySelector('.app');

var ViewboxSandbox = React.createClass({
  getInitialState: function() {
    return {
      width: 100,
      height: 100,
      viewboxMinX: 0,
      viewboxMinY: 0,
      viewboxWidth: 100,
      viewboxHeight: 100,
      align: 'none',
      meetOrSlice: 'meet'
    };
  },

  onChange: function(name, value) {
    var change = {};
    change[name] = value;
    this.setState(change);
  },

  render: function() {
    return (
      <div>
        <ViewboxForm {...this.state} onChange={this.onChange} />
        <br /><br />
        <div class="svg-container">
          <ViewboxSVG {...this.state} />
        </div>
      </div>
    );
  }
});

React.render(<ViewboxSandbox />, rootElement);
