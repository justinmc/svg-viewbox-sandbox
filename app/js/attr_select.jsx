var React = require('react');

var AttrInput = React.createClass({
  onInput: function(e) {
    this.props.onChange(this.props.name, e.target.value);
  },

  render: function() {
    return (
      <select onInput={this.onInput}>
        {this.props.possibleValues.map(function(el) {
          return (<option value={el}>{el}</option>);
        })}
      </select>
    );
  }
});

module.exports = AttrInput;
