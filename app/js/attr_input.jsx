var React = require('react');

var AttrInput = React.createClass({
  onChange: function(e) {
    this.props.onChange(this.props.name, e.target.value);
  },

  render: function() {
    return (
      <input type="number" placeholder={this.props.name} value={this.props.value} onChange={this.onChange} />
    );
  }
});

module.exports = AttrInput;
